/**
 * Visitor Alert Tracker Configuration
 * 
 * Telegram push notifications are active!
 * Whenever someone opens your portfolio, you'll receive a real-time notification on Telegram.
 */

export const TRACKER_CONFIG = {
  // Master switch for visitor alert tracking
  enabled: true,

  // Ignore visits on localhost and 127.0.0.1 development servers
  ignoreLocalhost: true,

  // Prevents multiple notifications from the same visitor during the same browser session
  debouncePerSession: true,

  // LocalStorage key for owner/admin mode exclusion
  ownerStorageKey: 'portfolio_owner_mode',

  // Optional list of specific IP addresses to ignore (e.g. ['123.45.67.89'])
  ignoredIPs: [] as string[],

  // Telegram Instant Push Notifications (ACTIVE)
  telegram: {
    enabled: true,
    botToken: '8921556938:AAEaC6APJ1Mb3tBnB-0lsoMujTLU30otK2o',
    chatId: '943578006',
  },

  // Formspree / Email Notifications
  formspree: {
    enabled: false,
    formId: '',
  },

  // Discord / Slack Webhook
  webhook: {
    enabled: false,
    url: '',
  },
};
