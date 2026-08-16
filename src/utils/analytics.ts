/**
 * Lightweight, privacy-friendly analytics tracking
 * Supports Google Analytics 4 (GA4), Plausible Analytics, and local telemetry
 */

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, any> }) => void;
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const trackEvent = (
  eventName: string,
  props?: Record<string, string | number | boolean>
) => {
  try {
    // 1. Google Analytics 4 (GA4)
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, props || {});
    }

    // 2. Plausible custom event
    if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
      window.plausible(eventName, { props });
    }

    // 3. DataLayer fallback
    if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...props,
      });
    }

    // 4. Developer console in local development
    if (typeof import.meta !== 'undefined' && (import.meta as any).env?.DEV) {
      console.log(`%c[Analytics]%c ${eventName}`, 'color: #3B82F6; font-weight: bold;', 'color: #94A3B8;', props || {});
    }
  } catch (err) {
    // Silently ignore analytics errors
  }
};

export const trackPageView = (url: string) => {
  trackEvent('page_view', { page_path: url, path: url });
};

export const trackResumeDownload = (source: string) => {
  trackEvent('download_resume', { source });
};

export const trackWhatsAppClick = (source: string) => {
  trackEvent('whatsapp_click', { source });
};

export const trackContactFormSubmit = () => {
  trackEvent('contact_form_submit');
};

export const trackOutboundClick = (destination: 'linkedin' | 'github' | 'email') => {
  trackEvent('outbound_click', { destination });
};

export const trackScreenshotView = (project: string, screenTitle: string) => {
  trackEvent('view_screenshot', { project, screen_title: screenTitle });
};
