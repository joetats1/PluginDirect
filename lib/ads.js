// Google AdSense & ad network integration
export function initializeAds() {
  // Load Google AdSense
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
  script.setAttribute('data-ad-client', process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID);
  document.head.appendChild(script);
}

export function trackAdImpressions() {
  if (window.adsbygoogle) {
    try {
      window.adsbygoogle.push({});
    } catch (e) {
      console.log('AdSense not loaded yet');
    }
  }
}

// Ad slots configuration
export const AD_SLOTS = {
  hero_bottom: {
    id: 'adslot_hero',
    size: 'horizontal',
    publisher: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID,
  },
  sidebar_1: {
    id: 'adslot_sidebar_1',
    size: 'vertical',
    publisher: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID,
  },
  footer_top: {
    id: 'adslot_footer',
    size: 'horizontal',
    publisher: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID,
  },
};
