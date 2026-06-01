// Affiliate links configuration
const AFFILIATES = {
  ecoflow: {
    name: 'EcoFlow',
    products: [
      { id: 'ps600', name: 'PowerStream 600W', price: 479, link: 'https://affiliate.ecoflow.com/ps600?ref=plugindirect' },
    ]
  },
  anker: {
    name: 'Anker',
    products: [
      { id: 'solix400', name: 'SOLIX 400W', price: 435, link: 'https://affiliate.anker.com/solix400?ref=plugindirect' },
    ]
  },
  generic: {
    name: 'Amazon',
    products: [
      { id: 'gen400', name: 'Generic 400W', price: 299, link: 'https://amazon.co.uk/s?k=plug+in+solar+400w&tag=plugindirect-21' },
    ]
  },
};

// Track affiliate clicks
export function trackAffiliateClick(productId, affiliateId) {
  // Send to analytics
  if (window.gtag) {
    gtag('event', 'affiliate_click', {
      'product_id': productId,
      'affiliate': affiliateId,
      'timestamp': new Date().toISOString(),
    });
  }
  
  // Log to backend
  fetch('/api/track/affiliate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId, affiliateId, timestamp: new Date() })
  }).catch(() => {});
}

export default AFFILIATES;
