import React, { useState, useEffect } from 'react';
import { getAnalyticsReport, AnalyticsReport, clearVisitorHistory } from '../utils/visitorStore';
import { X, Activity, Globe, Compass, Smartphone, Monitor, Clock, ShieldCheck, RefreshCw, Trash2 } from 'lucide-react';
import { TRACKER_CONFIG } from '../config/trackerConfig';

interface AnalyticsReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AnalyticsReportModal: React.FC<AnalyticsReportModalProps> = ({ isOpen, onClose }) => {
  const [report, setReport] = useState<AnalyticsReport | null>(null);

  const loadReport = () => {
    // Clean legacy test storage if any
    try {
      localStorage.removeItem('aquib_portfolio_visitor_history_v1');
    } catch (e) {}

    setReport(getAnalyticsReport());
  };

  useEffect(() => {
    if (isOpen) {
      loadReport();
    }
  }, [isOpen]);

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
              <p className="text-xs text-slate-400">Live, real-time visitor sessions and metrics</p>
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

          {report.totalVisits === 0 ? (
            <div className="py-10 text-center space-y-2 border border-dashed border-charcoal-800 rounded-xl">
              <Activity className="w-8 h-8 text-accent-400 mx-auto animate-pulse" />
              <h4 className="text-sm font-bold text-white font-mono">Listening for Incoming Traffic</h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                No real sessions recorded yet on this browser. As recruiters and visitors open your site from LinkedIn or GitHub, real-time sessions and metrics will populate here.
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
                  {report.recentVisits.map((visit) => (
                    <div key={visit.id} className="p-3 bg-charcoal-900/60 hover:bg-charcoal-900 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white font-mono">{visit.sourceType}</span>
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-charcoal-800 text-slate-300">
                            {visit.country} {visit.city ? `(${visit.city})` : ''}
                          </span>
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
                  ))}
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
