export interface StoredVisit {
  id: string;
  timestamp: number; // Unix timestamp ms
  formattedTime: string;
  sourceType: string;
  referrer: string;
  currentPath: string;
  country: string;
  city?: string;
  deviceType: 'Mobile' | 'Tablet' | 'Desktop';
  os: string;
  browser: string;
  screenSize: string;
}

export interface AnalyticsReport {
  totalVisits: number;
  last24Hours: number;
  last7Days: number;
  dailyAverage: number;
  topSources: { source: string; count: number; percentage: number }[];
  topLocations: { country: string; count: number }[];
  topPages: { path: string; count: number }[];
  deviceBreakdown: { mobile: number; desktop: number; tablet: number };
  recentVisits: StoredVisit[];
}

const STORAGE_KEY = 'aquib_portfolio_real_visitor_history';

export const recordVisitInStore = (visit: Omit<StoredVisit, 'id' | 'timestamp'>) => {
  if (typeof window === 'undefined') return;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const history: StoredVisit[] = raw ? JSON.parse(raw) : [];

    const newRecord: StoredVisit = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      timestamp: Date.now(),
      ...visit,
    };

    // Keep up to last 200 real visits
    const updated = [newRecord, ...history].slice(0, 200);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    // Ignore storage quota errors
  }
};

export const clearVisitorHistory = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem('aquib_portfolio_visitor_history_v1');
};

export const getAnalyticsReport = (): AnalyticsReport => {
  if (typeof window === 'undefined') {
    return {
      totalVisits: 0,
      last24Hours: 0,
      last7Days: 0,
      dailyAverage: 0,
      topSources: [],
      topLocations: [],
      topPages: [],
      deviceBreakdown: { mobile: 0, desktop: 0, tablet: 0 },
      recentVisits: [],
    };
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const history: StoredVisit[] = raw ? JSON.parse(raw) : [];

    if (history.length === 0) {
      return {
        totalVisits: 0,
        last24Hours: 0,
        last7Days: 0,
        dailyAverage: 0,
        topSources: [],
        topLocations: [],
        topPages: [],
        deviceBreakdown: { mobile: 0, desktop: 0, tablet: 0 },
        recentVisits: [],
      };
    }

    const now = Date.now();
    const oneDayAgo = now - 24 * 60 * 60 * 1000;
    const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000;

    const visits24h = history.filter((v) => v.timestamp >= oneDayAgo);
    const visits7d = history.filter((v) => v.timestamp >= sevenDaysAgo);

    // Daily average over the active days (up to 7 days)
    const oldestTimestamp = history[history.length - 1].timestamp;
    const daysActive = Math.max(1, Math.min(7, Math.ceil((now - oldestTimestamp) / (24 * 60 * 60 * 1000))));
    const dailyAvg = Math.round((visits7d.length / daysActive) * 10) / 10;

    // Top Sources
    const sourceMap: Record<string, number> = {};
    const locationMap: Record<string, number> = {};
    const pageMap: Record<string, number> = {};
    let mobileCount = 0;
    let desktopCount = 0;
    let tabletCount = 0;

    history.forEach((v) => {
      sourceMap[v.sourceType] = (sourceMap[v.sourceType] || 0) + 1;
      const country = v.country || 'Global';
      locationMap[country] = (locationMap[country] || 0) + 1;
      const page = v.currentPath.split('?')[0] || '/';
      pageMap[page] = (pageMap[page] || 0) + 1;

      if (v.deviceType === 'Mobile') mobileCount++;
      else if (v.deviceType === 'Tablet') tabletCount++;
      else desktopCount++;
    });

    const topSources = Object.entries(sourceMap)
      .map(([source, count]) => ({
        source,
        count,
        percentage: Math.round((count / history.length) * 100),
      }))
      .sort((a, b) => b.count - a.count);

    const topLocations = Object.entries(locationMap)
      .map(([country, count]) => ({ country, count }))
      .sort((a, b) => b.count - a.count);

    const topPages = Object.entries(pageMap)
      .map(([path, count]) => ({ path, count }))
      .sort((a, b) => b.count - a.count);

    return {
      totalVisits: history.length,
      last24Hours: visits24h.length,
      last7Days: visits7d.length,
      dailyAverage: dailyAvg,
      topSources,
      topLocations,
      topPages,
      deviceBreakdown: {
        mobile: mobileCount,
        desktop: desktopCount,
        tablet: tabletCount,
      },
      recentVisits: history.slice(0, 20),
    };
  } catch (err) {
    return {
      totalVisits: 0,
      last24Hours: 0,
      last7Days: 0,
      dailyAverage: 0,
      topSources: [],
      topLocations: [],
      topPages: [],
      deviceBreakdown: { mobile: 0, desktop: 0, tablet: 0 },
      recentVisits: [],
    };
  }
};
