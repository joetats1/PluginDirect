import React, { useState } from 'react';
import Head from 'next/head';

export default function CheckoutPage({ plans }) {
  const [plan, setPlan] = useState('premium');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const planDetails = {
    premium: { name: 'Premium Calculator', price: 9.99, priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PREMIUM },
    analytics: { name: 'Advanced Analytics', price: 19.99, priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ANALYTICS },
    installer: { name: 'Installer Dashboard', price: 49.99, priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_INSTALLER },
  };

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/checkout/create-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, plan }),
      });

      const { url } = await response.json();
      window.location.href = url; // Redirect to Stripe
    } catch (error) {
      console.error('Checkout error:', error);
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Upgrade | PluginDirect</title>
      </Head>

      <div style={{ background: '#F5F7FA', minHeight: '100vh', paddingTop: 100 }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '60px 32px' }}>
          <h1 style={{ fontSize: 48, marginBottom: 10, color: '#0F2444' }}>Unlock Premium Features</h1>
          <p style={{ fontSize: 18, color: '#5A6E8A', marginBottom: 40 }}>Get advanced analytics and detailed solar insights.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {Object.entries(planDetails).map(([key, details]) => (
              <div
                key={key}
                onClick={() => setPlan(key)}
                style={{
                  background: 'white',
                  border: plan === key ? '2px solid #E87B2D' : '1px solid #DDE3EC',
                  padding: 32,
                  borderRadius: 8,
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0F2444', marginBottom: 12 }}>{details.name}</h3>
                <div style={{ fontSize: 36, fontWeight: 800, color: '#E87B2D', marginBottom: 4 }}>£{details.price.toFixed(2)}</div>
                <div style={{ fontSize: 13, color: '#8E9EAF', marginBottom: 20 }}>/month, cancel anytime</div>
                <div style={{ fontSize: 13, color: '#5A6E8A', lineHeight: 1.8, marginBottom: 20 }}>
                  {key === 'premium' && '✓ Advanced calculator\n✓ Custom analysis\n✓ Email reports'}
                  {key === 'analytics' && '✓ Everything in Premium\n✓ Real-time analytics\n✓ API access'}
                  {key === 'installer' && '✓ Everything in Analytics\n✓ Lead management\n✓ Installer tools'}
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'white', border: '1px solid #DDE3EC', padding: 40, borderRadius: 8, marginTop: 40 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0F2444', marginBottom: 24 }}>Complete Your Purchase</h2>
            <div style={{ maxWidth: 400 }}>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', color: '#8E9EAF', marginBottom: 8 }}>Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    border: '1px solid #DDE3EC',
                    borderRadius: 4,
                    fontSize: 14,
                    fontFamily: 'inherit',
                  }}
                />
              </div>
              <button
                onClick={handleCheckout}
                disabled={!email || loading}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  background: '#0F2444',
                  color: 'white',
                  border: 'none',
                  borderRadius: 4,
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: loading ? 'wait' : 'pointer',
                  opacity: !email ? 0.5 : 1,
                }}
              >
                {loading ? 'Redirecting to Stripe...' : `Subscribe to ${planDetails[plan].name}`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
