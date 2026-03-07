/**
 * Utility to track custom GA4 events
 * @param {string} action - The name of the event
 * @param {object} params - Additional event parameters
 */
export const trackEvent = (action, params = {}) => {
    if (window.gtag) {
        window.gtag('event', action, params);
    }
};
