import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function CalculatorPage() {
  const [postcode, setPostcode] = useState('');
  const [kitSize, setKitSize] = useState('400');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Calculate savings based on postcode & kit size
  const calculateSavings = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    const solarIrradiance = {
      'SW': 3.8, 'SE': 3.7, 'S': 4.0, 'SC': 3.9,
      'NW': 3.2, 'NE': 3.3, 'N': 3.0, 'NC': 3.1,
    };

    const prefix = postcode.substring(0, 2).toUpperCase();
    const irradiance = solarIrradiance[prefix] || 3.5;
    const kwhPerYear = (parseInt(kitSize) / 1000) * 365 * irradiance * 0.85; // 85% efficiency
    const savingsPerYear = Math.round(kwhPerYear * 0.28); // £0.28/kWh
    const paybackYears = Math.round((parseInt(kitSize) * 0.6) / savingsPerYear * 10) / 10;

    setResults({
      kwhPerYear: Math.round(kwhPerYear),
      savingsPerYear,
      paybackYears,
      roi25Year: Math.round(savingsPerYear * 25 - parseInt(kitSize) * 0.6),
      co2Offset: Math.round(kwhPerYear * 0.42), // kg CO2
    });

    setLoading(false);
  };

  // Capture lead
  const captureLead = async () => {
    if (!email) return;

    try {
      const response = await fetch('/api/leads/capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          firstName: firstName || 'Customer',
          postcode,
          kitSize,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        // Redirect to premium calculator or next step
        setTimeout(() => {
          window.location.href = '/checkout?plan=premium';
        }, 2000);
      }
    } catch (error) {
      console.error('Lead capture error:', error);
    }
  };

  return (
    <>
      <Head>
        <title>Savings Calculator | PluginDirect</title>
        <meta name="description" content="Calculate your annual solar savings by postcode" />
      </Head>

      <div style={{ background: '#0F2444', color: 'white', minHeight: '100vh', paddingTop: 80 }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '60px 32px' }}>
          <h1 style={{ fontSize: 48, marginBottom: 20 }}>Calculate Your Solar Savings</h1>
          <p style={{ fontSize: 18, opacity: 0.8, marginBottom: 40 }}>Enter your details to see exactly how much you can save with plug-in solar.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
            {/* Input Form */}
            <form onSubmit={calculateSavings}>
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', opacity: 0.7, marginBottom: 8 }}>Postcode</label>
                <input
                  type="text"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                  placeholder="e.g., SW1A 1AA"
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'white',
                    fontSize: 14,
                    borderRadius: 4,
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', opacity: 0.7, marginBottom: 8 }}>Kit Size (Watts)</label>
                <select
                  value={kitSize}
                  onChange={(e) => setKitSize(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'white',
                    fontSize: 14,
                    borderRadius: 4,
                    fontFamily: 'inherit',
                  }}
                >
                  <option value="400">400W</option>
                  <option value="500">500W</option>
                  <option value="600">600W</option>
                  <option value="800">800W (Maximum)</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading || !postcode}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  background: '#E87B2D',
                  color: 'white',
                  border: 'none',
                  borderRadius: 4,
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: loading ? 'wait' : 'pointer',
                  opacity: !postcode ? 0.5 : 1,
                }}
              >
                {loading ? '⏳ Calculating...' : 'Calculate Savings'}
              </button>
            </form>

            {/* Results */}
            {results && (
              <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: 28, borderRadius: 8 }}>
                <div style={{ marginBottom: 28 }}>
                  <div style={{ fontSize: 12, opacity: 0.7, textTransform: 'uppercase', marginBottom: 6 }}>Annual Savings</div>
                  <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1 }}>£{results.savingsPerYear}</div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <div>
                    <div style={{ fontSize: 12, opacity: 0.7 }}>Payback Period</div>
                    <div style={{ fontSize: 24, fontWeight: 700, marginTop: 4 }}>{results.paybackYears} years</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, opacity: 0.7 }}>Annual kWh</div>
                    <div style={{ fontSize: 24, fontWeight: 700, marginTop: 4 }}>{results.kwhPerYear.toLocaleString()}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, opacity: 0.7 }}>25-Year ROI</div>
                    <div style={{ fontSize: 20, fontWeight: 700, marginTop: 4, color: '#4ADA6F' }}>£{results.roi25Year.toLocaleString()}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, opacity: 0.7 }}>CO2 Offset (yr)</div>
                    <div style={{ fontSize: 20, fontWeight: 700, marginTop: 4, color: '#4ADA6F' }}>{results.co2Offset}kg</div>
                  </div>
                </div>

                {!submitted ? (
                  <>
                    <div style={{ marginBottom: 16 }}>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', opacity: 0.7, marginBottom: 8 }}>Your Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          background: 'rgba(255,255,255,0.07)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          color: 'white',
                          fontSize: 13,
                          borderRadius: 4,
                          fontFamily: 'inherit',
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', opacity: 0.7, marginBottom: 8 }}>First Name</label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="John"
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          background: 'rgba(255,255,255,0.07)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          color: 'white',
                          fontSize: 13,
                          borderRadius: 4,
                          fontFamily: 'inherit',
                        }}
                      />
                    </div>
                    <button
                      onClick={captureLead}
                      style={{
                        width: '100%',
                        padding: '12px 20px',
                        background: '#E87B2D',
                        color: 'white',
                        border: 'none',
                        borderRadius: 4,
                        fontSize: 14,
                        fontWeight: 700,
                        cursor: 'pointer',
                      }}
                    >
                      Get Full Analysis →
                    </button>
                  </>
                ) : (
                  <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(74, 218, 111, 0.1)', borderRadius: 4, borderColor: '#4ADA6F', borderStyle: 'solid', borderWidth: 1 }}>
                    ✓ Email captured! Redirecting to premium features...
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
