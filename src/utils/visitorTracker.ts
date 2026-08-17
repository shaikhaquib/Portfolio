import { TRACKER_CONFIG } from '../config/trackerConfig';
import { recordVisitInStore } from './visitorStore';

export interface VisitorInfo {
  referrer: string;
  sourceType: string;
  currentPath: string;
  timestamp: string;
  country: string;
  region?: string;
  city?: string;
  ip?: string;
  isp?: string;
  flag?: string;
  timezone?: string;
  deviceType: 'Mobile' | 'Tablet' | 'Desktop';
  os: string;
  browser: string;
  screenSize: string;
  language: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

interface GeoResult {
  country: string;
  region?: string;
  city?: string;
  ip?: string;
  isp?: string;
  flag?: string;
  timezone?: string;
}

const parseDeviceAndOS = (): { deviceType: 'Mobile' | 'Tablet' | 'Desktop'; os: string; browser: string } => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return { deviceType: 'Desktop', os: 'Unknown', browser: 'Unknown' };
  }

  const ua = navigator.userAgent;
  let deviceType: 'Mobile' | 'Tablet' | 'Desktop' = 'Desktop';
  let os = 'Unknown OS';
  let browser = 'Unknown Browser';

  // Device detection
  if (/iPad|Tablet|Android(?!.*Mobile)/i.test(ua)) {
    deviceType = 'Tablet';
  } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated/i.test(ua)) {
    deviceType = 'Mobile';
  }

  // OS detection
  if (/Windows/i.test(ua)) os = 'Windows';
  else if (/Macintosh|Mac OS X/i.test(ua)) os = 'macOS';
  else if (/iPhone|iPad|iPod/i.test(ua)) os = 'iOS';
  else if (/Android/i.test(ua)) os = 'Android';
  else if (/Linux/i.test(ua)) os = 'Linux';

  // Browser detection
  if (/Chrome/i.test(ua) && !/Edge|Edg|OPR/i.test(ua)) browser = 'Chrome';
  else if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) browser = 'Safari';
  else if (/Firefox/i.test(ua)) browser = 'Firefox';
  else if (/Edge|Edg/i.test(ua)) browser = 'Edge';

  return { deviceType, os, browser };
};

const getReferralSource = (referrer: string): string => {
  if (!referrer) return 'Direct / Bookmark';
  if (referrer.includes('linkedin.com') || referrer.includes('lnkd.in')) return 'LinkedIn';
  if (referrer.includes('github.com')) return 'GitHub';
  if (referrer.includes('t.co') || referrer.includes('twitter.com') || referrer.includes('x.com')) return 'Twitter / X';
  if (referrer.includes('google.com')) return 'Google Search';
  if (referrer.includes('whatsapp') || referrer.includes('wa.me')) return 'WhatsApp';
  return referrer;
};

// Resilient Multi-Tier IP Geolocation Resolver
const fetchAccurateGeoLocation = async (): Promise<GeoResult> => {
  // 1. Primary: ipwho.is (High-accuracy City, Region, Country, Flag, ISP, Timezone)
  try {
    const res = await fetch('https://ipwho.is/', { cache: 'no-cache' });
    if (res.ok) {
      const data = await res.json();
      if (data.success !== false && data.country) {
        return {
          country: data.country || 'Global',
          region: data.region || '',
          city: data.city || '',
          ip: data.ip || '',
          isp: data.connection?.isp || data.connection?.org || '',
          flag: data.flag?.emoji || '',
          timezone: data.timezone?.id || '',
        };
      }
    }
  } catch (e) {}

  // 2. Fallback 1: ipapi.co
  try {
    const res = await fetch('https://ipapi.co/json/', { cache: 'no-cache' });
    if (res.ok) {
      const data = await res.json();
      if (data.country_name) {
        return {
          country: data.country_name || 'Global',
          region: data.region || '',
          city: data.city || '',
          ip: data.ip || '',
          isp: data.org || '',
          timezone: data.timezone || '',
        };
      }
    }
  } catch (e) {}

  // 3. Fallback 2: freeipapi.com
  try {
    const res = await fetch('https://freeipapi.com/api/json', { cache: 'no-cache' });
    if (res.ok) {
      const data = await res.json();
      if (data.countryName) {
        return {
          country: data.countryName || 'Global',
          region: data.regionName || '',
          city: data.cityName || '',
          ip: data.ipAddress || '',
          timezone: data.timeZone || '',
        };
      }
    }
  } catch (e) {}

  return { country: 'Global' };
};

export const initVisitorTracker = async () => {
  if (!TRACKER_CONFIG.enabled || typeof window === 'undefined') return;

  // Session debounce check (prevents duplicate spam on the same visit)
  if (TRACKER_CONFIG.debouncePerSession) {
    const hasTracked = sessionStorage.getItem('portfolio_visitor_tracked');
    if (hasTracked) return;
    sessionStorage.setItem('portfolio_visitor_tracked', 'true');
  }

  // Zero-config background telemetry ping (hits.sh)
  try {
    fetch('https://hits.sh/shaikhaquib.github.io/Portfolio.svg', { mode: 'no-cors' }).catch(() => {});
  } catch (e) {}

  const { deviceType, os, browser } = parseDeviceAndOS();
  const rawReferrer = document.referrer;
  const referralSource = getReferralSource(rawReferrer);

  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source') || undefined;
  const utmMedium = urlParams.get('utm_medium') || undefined;
  const utmCampaign = urlParams.get('utm_campaign') || undefined;

  // Fetch accurate location from IP
  const geo = await fetchAccurateGeoLocation();

  const visitor: VisitorInfo = {
    referrer: rawReferrer || 'Direct',
    sourceType: referralSource,
    currentPath: window.location.pathname + window.location.search,
    timestamp: new Date().toLocaleString('en-US', {
      timeZone: geo.timezone || undefined,
      dateStyle: 'medium',
      timeStyle: 'short',
    }),
    country: geo.country,
    region: geo.region,
    city: geo.city,
    ip: geo.ip,
    isp: geo.isp,
    flag: geo.flag,
    timezone: geo.timezone,
    deviceType,
    os,
    browser,
    screenSize: `${window.innerWidth}x${window.innerHeight}`,
    language: navigator.language || 'en',
    utmSource,
    utmMedium,
    utmCampaign,
  };

  // Record into client-side persistent history store
  recordVisitInStore({
    formattedTime: visitor.timestamp,
    sourceType: visitor.sourceType,
    referrer: visitor.referrer,
    currentPath: visitor.currentPath,
    country: visitor.country,
    region: visitor.region,
    city: visitor.city,
    ip: visitor.ip,
    isp: visitor.isp,
    flag: visitor.flag,
    deviceType: visitor.deviceType,
    os: visitor.os,
    browser: visitor.browser,
    screenSize: visitor.screenSize,
  });

  // Dispatch alert to enabled notification endpoints
  await sendVisitorAlert(visitor);
};

const sendVisitorAlert = async (visitor: VisitorInfo) => {
  // Format location string: "Panvel, Maharashtra, India 🇮🇳"
  const locationParts = [visitor.city, visitor.region, visitor.country]
    .filter(Boolean)
    .join(', ');
  const locationFormatted = `${locationParts} ${visitor.flag || ''}`.trim() || 'Global';

  // 1. Telegram Notification (Instant Push to Phone)
  if (TRACKER_CONFIG.telegram.enabled && TRACKER_CONFIG.telegram.botToken && TRACKER_CONFIG.telegram.chatId) {
    try {
      const message =
        `🔔 *New Portfolio Visitor Alert!*\n\n` +
        `📍 *Location:* ${locationFormatted}\n` +
        `🌐 *Source:* ${visitor.sourceType}\n` +
        (visitor.ip ? `🖥️ *IP & Network:* \`${visitor.ip}\` ${visitor.isp ? `(${visitor.isp})` : ''}\n` : '') +
        `📱 *Device:* ${visitor.deviceType} (${visitor.os} • ${visitor.browser} • ${visitor.screenSize})\n` +
        `📄 *Landing Page:* \`${visitor.currentPath}\`\n` +
        `⏰ *Time:* ${visitor.timestamp} ${visitor.timezone ? `(${visitor.timezone})` : ''}\n` +
        (visitor.utmSource ? `🏷️ *Campaign:* ${visitor.utmSource} / ${visitor.utmMedium || ''}\n` : '') +
        `🔗 *Referrer:* \`${visitor.referrer}\``;

      await fetch(`https://api.telegram.org/bot${TRACKER_CONFIG.telegram.botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TRACKER_CONFIG.telegram.chatId,
          text: message,
          parse_mode: 'Markdown',
        }),
      });
    } catch (err) {
      console.warn('Telegram alert failed:', err);
    }
  }

  // 2. Formspree / Email Notification
  if (TRACKER_CONFIG.formspree.enabled && TRACKER_CONFIG.formspree.formId) {
    try {
      await fetch(`https://formspree.io/f/${TRACKER_CONFIG.formspree.formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: `Portfolio Visit from ${locationFormatted} (${visitor.sourceType})`,
          ...visitor,
        }),
      });
    } catch (err) {
      console.warn('Formspree alert failed:', err);
    }
  }

  // 3. Discord / Slack Webhook
  if (TRACKER_CONFIG.webhook.enabled && TRACKER_CONFIG.webhook.url) {
    try {
      await fetch(TRACKER_CONFIG.webhook.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: `🔔 **New Portfolio Visitor** from **${locationFormatted}** via **${visitor.sourceType}** on ${visitor.deviceType} (${visitor.os}). Path: ${visitor.currentPath}`,
        }),
      });
    } catch (err) {
      console.warn('Webhook alert failed:', err);
    }
  }

  // 4. Developer Console in local development
  if (typeof import.meta !== 'undefined' && (import.meta as any).env?.DEV) {
    console.log('%c[Visitor Tracker]%c Captured Live Session:', 'color: #10B981; font-weight: bold;', 'color: #94A3B8;', {
      location: locationFormatted,
      ip: visitor.ip,
      isp: visitor.isp,
      visitor,
    });
  }
};
