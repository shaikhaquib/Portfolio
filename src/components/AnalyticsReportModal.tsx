import React, { useState, useEffect } from 'react';
import { getAnalyticsReport, AnalyticsReport, clearVisitorHistory } from '../utils/visitorStore';
import { 
  isOwnerMode, 
  setOwnerMode, 
  fetchAccurateGeoLocation, 
  GeoResult, 
  getAllIgnoredIPs, 
  addIgnoredIP, 
  removeIgnoredIP, 
  isIPIgnored 
} from '../utils/visitorTracker';
import { 
  X, 
  Activity, 
  Globe, 
  Compass, 
  Smartphone, 
  Monitor, 
  Clock, 
  ShieldCheck, 
  RefreshCw, 
  Trash2, 
  BellOff, 
  CheckCircle2, 
  Wifi, 
  Shield, 
  Copy, 
  Check, 
  Plus,
  AlertCircle
} from 'lucide-react';
import { TRACKER_CONFIG } from '../config/trackerConfig';

interface AnalyticsReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AnalyticsReportModal: React.FC<AnalyticsReportModalProps> = ({ isOpen, onClose }) => {
  const [report, setReport] = useState<AnalyticsReport | null>(null);
  const [ownerModeActive, setOwnerModeActive] = useState<boolean>(false);
  const [currentGeo, setCurrentGeo] = useState<GeoResult | null>(null);
  const [loadingGeo, setLoadingGeo] = useState<boolean>(false);
  const [ignoredIPsList, setIgnoredIPsList] = useState<string[]>([]);
  const [customIPInput, setCustomIPInput] = useState<string>('');
  const [copiedConfig, setCopiedConfig] = useState<boolean>(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const loadReport = () => {
    // Clean legacy test storage if any
    try {
      localStorage.removeItem('aquib_portfolio_visitor_history_v1');
    } catch (e) {}

    setReport(getAnalyticsReport());
    setOwnerModeActive(isOwnerMode());
    setIgnoredIPsList(getAllIgnoredIPs());
  };

  const fetchLiveGeo = async () => {
    setLoadingGeo(true);
    try {
      const geo = await fetchAccurateGeoLocation();
      setCurrentGeo(geo);
    } catch (e) {
      console.warn('Could not resolve current IP:', e);
    } finally {
      setLoadingGeo(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadReport();
      fetchLiveGeo();
    }
  }, [isOpen]);

  const showFeedback = (msg: string) => {
    setFeedbackMessage(msg);
    setTimeout(() => setFeedbackMessage(null), 4000);
  };

  const handleToggleOwnerMode = () => {
    const nextState = !ownerModeActive;
    setOwnerMode(nextState);
    setOwnerModeActive(nextState);
    showFeedback(nextState ? '👑 Owner Mode enabled for this browser!' : 'Owner Mode disabled.');
  };

  const handleMuteCurrentIP = () => {
    if (!currentGeo?.ip) return;
    addIgnoredIP(currentGeo.ip);
    setOwnerMode(true);
    setOwnerModeActive(true);
    setIgnoredIPsList(getAllIgnoredIPs());
    showFeedback(`🛡️ IP ${currentGeo.ip} saved! All visits from this IP are now muted.`);
  };

  const handleUnmuteCurrentIP = () => {
    if (!currentGeo?.ip) return;
    removeIgnoredIP(currentGeo.ip);
    setIgnoredIPsList(getAllIgnoredIPs());
    showFeedback(`🔓 IP ${currentGeo.ip} unmuted.`);
  };

  const handleAddCustomIP = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customIPInput.trim()) return;
    addIgnoredIP(customIPInput.trim());
    setIgnoredIPsList(getAllIgnoredIPs());
    showFeedback(`Added IP ${customIPInput.trim()} to ignored list.`);
    setCustomIPInput('');
  };

  const handleRemoveIP = (ip: string) => {
    removeIgnoredIP(ip);
    setIgnoredIPsList(getAllIgnoredIPs());
    showFeedback(`Removed IP ${ip}.`);
  };

  const handleCopyConfigSnippet = () => {
    const ips = getAllIgnoredIPs();
    const snippet = `ignoredIPs: ${JSON.stringify(ips, null, 2)},`;
    navigator.clipboard.writeText(snippet);
    setCopiedConfig(true);
    setTimeout(() => setCopiedConfig(false), 3000);
    showFeedback('📋 Copied ignoredIPs snippet to clipboard!');
  };

  const handleReset = () => {
    if (window.confirm('Reset all local visitor telemetry history?')) {
      clearVisitorHistory();
      loadReport();
    }
  };

  if (!isOpen || !report) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="dev-card w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col bg-charcoal-950 border-charcoal-700 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-charcoal-900 border-b border-charcoal-750 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-accent-950 border border-accent-600/30 flex items-center justify-center text-accent-400">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white font-mono">Visitor Telemetry Report</h3>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-accent-950 text-accent-400 border border-accent-600/30">
                  Real Traffic Only
                </span>
              </div>
              <p className="text-xs text-slate-400">Live IP geolocation & visitor sessions</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={loadReport}
              className="p-1.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-750 text-slate-400 hover:text-white transition-colors"
              title="Refresh Report"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-750 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 max-h-[75vh]">
          
          {/* Key Timeframe Metrics: 24h, Week, Daily Avg */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 bg-charcoal-900 border border-charcoal-750 rounded-xl space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Last 24 Hours
              </span>
              <div className="text-2xl font-mono font-bold text-accent-400">
                {report.last24Hours}
              </div>
              <span className="text-[10px] text-slate-400">Real visits</span>
            </div>

            <div className="p-3.5 bg-charcoal-900 border border-charcoal-750 rounded-xl space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Last 7 Days (Week)
              </span>
              <div className="text-2xl font-mono font-bold text-white">
                {report.last7Days}
              </div>
              <span className="text-[10px] text-slate-400">Weekly total</span>
            </div>

            <div className="p-3.5 bg-charcoal-900 border border-charcoal-750 rounded-xl space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Daily Average
              </span>
              <div className="text-2xl font-mono font-bold text-accent-400">
                {report.dailyAverage}
              </div>
              <span className="text-[10px] text-slate-400">Visits / day</span>
            </div>

            <div className="p-3.5 bg-charcoal-900 border border-charcoal-750 rounded-xl space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Total Sessions
              </span>
              <div className="text-2xl font-mono font-bold text-white">
                {report.totalVisits}
              </div>
              <span className="text-[10px] text-slate-400">Recorded sessions</span>
            </div>
          </div>

          {/* Telegram Status Banner */}
          <div className="p-3.5 bg-charcoal-900 border border-charcoal-750 rounded-xl flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent-400" />
              <span className="text-slate-300">
                Telegram Bot: <strong className="text-white">@AquibPortfolioAlertBot</strong>
              </span>
            </div>
            <span className="text-[11px] font-mono text-accent-400">
              ID: {TRACKER_CONFIG.telegram.chatId} (Active)
            </span>
          </div>

          {/* Dynamic Feedback Banner */}
          {feedbackMessage && (
            <div className="p-3 bg-accent-950/80 border border-accent-500/60 rounded-xl flex items-center justify-between text-xs font-mono text-accent-300 animate-fade-in">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0" />
                <span>{feedbackMessage}</span>
              </div>
              <button 
                onClick={() => setFeedbackMessage(null)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Owner Protection & IP Muting Control Panel */}
          <div className="p-4 sm:p-5 rounded-xl border bg-charcoal-900 border-charcoal-750 space-y-4">
            
            {/* Header & Quick Owner Mode Toggle */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-charcoal-750">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-accent-400" />
                  <h4 className="text-xs font-bold font-mono text-white">
                    Owner Protection & IP Filtering
                  </h4>
                  {ownerModeActive && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-accent-500/20 text-accent-300 border border-accent-500/30 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Browser Muted
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-400">
                  Mute Telegram notifications when you visit from this browser or your current IP / Wi-Fi.
                </p>
              </div>

              <button
                onClick={handleToggleOwnerMode}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                  ownerModeActive
                    ? 'bg-charcoal-800 hover:bg-charcoal-750 text-slate-300 border border-charcoal-600'
                    : 'bg-accent-600 hover:bg-accent-500 text-white shadow-lg shadow-accent-600/20'
                }`}
              >
                <BellOff className="w-3.5 h-3.5" />
                <span>{ownerModeActive ? 'Disable Owner Mode' : 'Enable Owner Mode'}</span>
              </button>
            </div>

            {/* Current Detected IP Section */}
            <div className="p-3.5 bg-charcoal-950 border border-charcoal-800 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Wifi className="w-3.5 h-3.5 text-accent-400" />
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Your Current Public IP:
                  </span>
                  {loadingGeo ? (
                    <span className="text-xs font-mono text-slate-500 animate-pulse">Detecting...</span>
                  ) : currentGeo?.ip ? (
                    <span className="text-xs font-mono font-bold text-white bg-charcoal-900 px-2 py-0.5 rounded border border-charcoal-750">
                      {currentGeo.ip}
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-slate-500">Unavailable</span>
                  )}

                  {/* Muted or Active Badge for this specific IP */}
                  {currentGeo?.ip && (
                    isIPIgnored(currentGeo.ip) ? (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> IP Muted
                      </span>
                    ) : (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-amber-950/80 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> IP Active
                      </span>
                    )
                  )}
                </div>

                {currentGeo && (
                  <p className="text-[10px] text-slate-400 font-mono">
                    📍 {currentGeo.city ? `${currentGeo.city}, ` : ''}{currentGeo.country} {currentGeo.flag || ''} {currentGeo.isp ? `• ${currentGeo.isp}` : ''}
                  </p>
                )}
              </div>

              {/* Action Button for Current IP */}
              {currentGeo?.ip && (
                <div>
                  {isIPIgnored(currentGeo.ip) ? (
                    <button
                      onClick={handleUnmuteCurrentIP}
                      className="w-full sm:w-auto px-3 py-1.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-750 text-slate-300 border border-charcoal-700 text-xs font-mono font-semibold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <X className="w-3.5 h-3.5 text-slate-400" />
                      <span>Unmute This IP</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleMuteCurrentIP}
                      className="w-full sm:w-auto px-3.5 py-1.5 rounded-lg bg-accent-600 hover:bg-accent-500 text-white text-xs font-mono font-bold shadow-md shadow-accent-600/30 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Shield className="w-3.5 h-3.5" />
                      <span>Remember I'm Owner (Mute My IP)</span>
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Muted IPs List & Manual Add */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-400" />
                  Muted Owner IP Addresses ({ignoredIPsList.length}):
                </span>

                {ignoredIPsList.length > 0 && (
                  <button
                    onClick={handleCopyConfigSnippet}
                    className="text-accent-400 hover:text-accent-300 flex items-center gap-1 text-[10px] transition-colors"
                    title="Copy for trackerConfig.ts"
                  >
                    {copiedConfig ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedConfig ? 'Copied!' : 'Copy for trackerConfig.ts'}</span>
                  </button>
                )}
              </div>

              {/* IP Pill Tags */}
              <div className="flex flex-wrap gap-2 min-h-[32px] items-center p-2 rounded-lg bg-charcoal-950/60 border border-charcoal-800">
                {ignoredIPsList.length === 0 ? (
                  <span className="text-[11px] text-slate-500 font-mono italic">
                    No custom IPs muted yet. Click "Remember I'm Owner (Mute My IP)" above to add your current IP.
                  </span>
                ) : (
                  ignoredIPsList.map((ip) => (
                    <span
                      key={ip}
                      className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-charcoal-900 border border-charcoal-700 text-xs font-mono text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                      <span>{ip}</span>
                      {currentGeo?.ip === ip && (
                        <span className="text-[9px] text-accent-400 font-bold">(Current)</span>
                      )}
                      <button
                        onClick={() => handleRemoveIP(ip)}
                        className="text-slate-500 hover:text-rose-400 transition-colors ml-0.5"
                        title={`Remove ${ip}`}
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))
                )}
              </div>

              {/* Manual IP Addition Input */}
              <form onSubmit={handleAddCustomIP} className="flex gap-2 pt-1">
                <input
                  type="text"
                  value={customIPInput}
                  onChange={(e) => setCustomIPInput(e.target.value)}
                  placeholder="Add another static IP (e.g. 192.0.2.1)"
                  className="flex-1 bg-charcoal-950 border border-charcoal-750 rounded-lg px-3 py-1.5 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-accent-500"
                />
                <button
                  type="submit"
                  disabled={!customIPInput.trim()}
                  className="px-3 py-1.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-750 disabled:opacity-40 text-slate-200 border border-charcoal-700 text-xs font-mono font-medium transition-colors flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add IP</span>
                </button>
              </form>
            </div>
          </div>

          {report.totalVisits === 0 ? (
            <div className="py-10 text-center space-y-2 border border-dashed border-charcoal-800 rounded-xl">
              <Activity className="w-8 h-8 text-accent-400 mx-auto animate-pulse" />
              <h4 className="text-sm font-bold text-white font-mono">Listening for Incoming Traffic</h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                No real sessions recorded yet on this browser. As recruiters and visitors open your site from LinkedIn or GitHub, real-time sessions with precise City & Country will populate here.
              </p>
            </div>
          ) : (
            <>
              {/* 2-Column Grid: Traffic Sources & Geo Distribution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Referral Sources */}
                <div className="p-4 bg-charcoal-900 border border-charcoal-750 rounded-xl space-y-3">
                  <h4 className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-accent-400" />
                    <span>Top Referral Sources</span>
                  </h4>
                  <div className="space-y-2">
                    {report.topSources.map((item, idx) => (
                      <div key={idx} className="space-y-1 text-xs">
                        <div className="flex justify-between text-[11px]">
                          <span className="text-slate-300 font-mono">{item.source}</span>
                          <span className="text-accent-400 font-mono font-bold">{item.count} ({item.percentage}%)</span>
                        </div>
                        <div className="w-full h-1.5 bg-charcoal-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent-500 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Geographic Distribution */}
                <div className="p-4 bg-charcoal-900 border border-charcoal-750 rounded-xl space-y-3">
                  <h4 className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-accent-400" />
                    <span>Geographic Locations</span>
                  </h4>
                  <div className="space-y-2 text-xs">
                    {report.topLocations.slice(0, 5).map((loc, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 rounded bg-charcoal-950 border border-charcoal-800 text-[11px]">
                        <span className="text-slate-300">{loc.country}</span>
                        <span className="font-mono font-bold text-white px-2 py-0.5 rounded bg-charcoal-800">
                          {loc.count} {loc.count === 1 ? 'visit' : 'visits'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Device & Platform Breakdown */}
              <div className="p-4 bg-charcoal-900 border border-charcoal-750 rounded-xl space-y-3">
                <h4 className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-accent-400" />
                  <span>Device Breakdown</span>
                </h4>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-2.5 rounded bg-charcoal-950 border border-charcoal-800">
                    <Smartphone className="w-4 h-4 text-accent-400 mx-auto mb-1" />
                    <span className="text-[10px] text-slate-400 block font-mono">Mobile</span>
                    <span className="text-sm font-bold text-white font-mono">{report.deviceBreakdown.mobile}</span>
                  </div>
                  <div className="p-2.5 rounded bg-charcoal-950 border border-charcoal-800">
                    <Monitor className="w-4 h-4 text-accent-400 mx-auto mb-1" />
                    <span className="text-[10px] text-slate-400 block font-mono">Desktop</span>
                    <span className="text-sm font-bold text-white font-mono">{report.deviceBreakdown.desktop}</span>
                  </div>
                  <div className="p-2.5 rounded bg-charcoal-950 border border-charcoal-800">
                    <Smartphone className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                    <span className="text-[10px] text-slate-400 block font-mono">Tablet</span>
                    <span className="text-sm font-bold text-white font-mono">{report.deviceBreakdown.tablet}</span>
                  </div>
                </div>
              </div>

              {/* Recent Visitor Sessions Log */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-accent-400" />
                  <span>Real-Time Visitor Log</span>
                </h4>
                <div className="border border-charcoal-750 rounded-xl overflow-hidden divide-y divide-charcoal-800">
                  {report.recentVisits.map((visit) => {
                    const locDetail = [visit.city, visit.region, visit.country].filter(Boolean).join(', ');
                    return (
                      <div key={visit.id} className="p-3 bg-charcoal-900/60 hover:bg-charcoal-900 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white font-mono">{visit.sourceType}</span>
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-charcoal-800 text-slate-300">
                              {locDetail} {visit.flag || ''}
                            </span>
                            {visit.isp && (
                              <span className="text-[10px] text-slate-400 font-mono hidden md:inline">
                                • {visit.isp}
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-slate-400 block truncate max-w-md">
                            Landing Page: <strong className="text-slate-300">{visit.currentPath}</strong>
                          </span>
                        </div>

                        <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400 shrink-0">
                          <span>{visit.deviceType} • {visit.os}</span>
                          <span>{visit.formattedTime.split(',')[1] || visit.formattedTime}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-charcoal-900 border-t border-charcoal-750 flex items-center justify-between text-xs font-mono text-slate-400">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-red-400 hover:text-red-300 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Reset History</span>
          </button>
          
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-750 text-white font-bold transition-colors"
          >
            Close Report
          </button>
        </div>
      </div>
    </div>
  );
};
