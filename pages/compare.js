import { useEffect, useState } from 'react';
import Link from 'next/link';
import AFFILIATES, { trackAffiliateClick } from '../lib/affiliates';

export default function ComparePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  const handleAffiliateClick = (productId, affiliateId) => {
    trackAffiliateClick(productId, affiliateId);
    // Link opens in new tab
  };

  return (
    <div style={{ background: '#F5F7FA', minHeight: '100vh', paddingTop: 80 }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '60px 32px' }}>
        <h1 style={{ fontSize: 48, marginBottom: 10, color: '#0F2444' }}>Compare Plug-In Solar Kits</h1>
        <p style={{ fontSize: 18, color: '#5A6E8A', marginBottom: 40 }}>All major brands compared side-by-side. Updated hourly.</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 1,
          background: '#DDE3EC',
          border: '1px solid #DDE3EC',
          borderRadius: 8,
          overflow: 'hidden',
        }}>
          {products.map(product => (
            <div key={product.id} style={{
              background: '#FDF3EA',
              padding: 24,
              borderRight: '1px solid #DDE3EC',
              borderBottom: '1px solid #DDE3EC',
            }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0F2444', marginBottom: 8 }}>{product.name}</h3>
              <div style={{ fontSize: 24, fontWeight: 800, color: '#E87B2D', marginBottom: 4 }}>£{product.price}</div>
              <div style={{ fontSize: 13, color: '#5A6E8A', marginBottom: 12 }}>⭐ {product.rating} ({product.reviews} reviews)</div>
              <div style={{ fontSize: 12, color: '#8E9EAF', marginBottom: 16, lineHeight: 1.6 }}>
                <div>Power: {product.power}W</div>
                <div>Efficiency: {product.efficiency}%</div>
                <div>Warranty: {product.warranty} years</div>
              </div>
              <button onClick={() => handleAffiliateClick(product.id, product.brand.toLowerCase())} style={{
                width: '100%',
                padding: '10px',
                background: '#0F2444',
                color: 'white',
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: 13,
              }}>
                View on {product.brand} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
