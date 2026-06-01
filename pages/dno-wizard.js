import React, { useState } from 'react';
import Head from 'next/head';

export default function DNOWizardPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    postcode: '',
    phone: '',
    systemSize: '400',
    installationDate: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/referrals/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('DNO registration error:', error);
    }
  };

  return (
    <>
      <Head>
        <title>DNO Registration Wizard | PluginDirect</title>
      </Head>

      <div style={{ background: '#0F2444', color: 'white', minHeight: '100vh', paddingTop: 80 }}>
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '60px 32px' }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: 'flex', gap: 8 }}>
              {[1, 2, 3].map(s => (
                <div
                  key={s}
                  style={{
                    flex: 1,
                    height: 4,
                    background: s <= step ? '#E87B2D' : 'rgba(255,255,255,0.1)',
                    borderRadius: 2,
                    transition: 'all 0.3s',
                  }}
                />
              ))}
            </div>
          </div>

          {!submitted ? (
            <>
              <h1 style={{ fontSize: 36, marginBottom: 20 }}>DNO Registration Wizard</h1>
              <p style={{ fontSize: 16, opacity: 0.8, marginBottom: 32 }}>Complete your DNO registration in 3 steps. Free, required by law.</p>

              {/* Step 1: Personal Info */}
              {step === 1 && (
                <div>
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', opacity: 0.7, marginBottom: 8 }}>Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="John Smith"
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
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', opacity: 0.7, marginBottom: 8 }}>Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="john@example.com"
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
                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', opacity: 0.7, marginBottom: 8 }}>Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+44 7700 000000"
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
                </div>
              )}

              {/* Step 2: Installation Details */}
              {step === 2 && (
                <div>
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', opacity: 0.7, marginBottom: 8 }}>Postcode</label>
                    <input
                      type="text"
                      value={formData.postcode}
                      onChange={(e) => handleChange('postcode', e.target.value.toUpperCase())}
                      placeholder="SW1A 1AA"
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
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', opacity: 0.7, marginBottom: 8 }}>System Size</label>
                    <select
                      value={formData.systemSize}
                      onChange={(e) => handleChange('systemSize', e.target.value)}
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
                      <option value="800">800W</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', opacity: 0.7, marginBottom: 8 }}>Installation Date</label>
                    <input
                      type="date"
                      value={formData.installationDate}
                      onChange={(e) => handleChange('installationDate', e.target.value)}
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
                </div>
              )}

              {/* Step 3: Review */}
              {step === 3 && (
                <div>
                  <h2 style={{ fontSize: 20, marginBottom: 20 }}>Review Your Details</h2>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: 20, borderRadius: 4, marginBottom: 20 }}>
                    <div style={{ marginBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 12 }}>
                      <div style={{ fontSize: 12, opacity: 0.7 }}>Name</div>
                      <div style={{ fontSize: 16, fontWeight: 700 }}>{formData.name}</div>
                    </div>
                    <div style={{ marginBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 12 }}>
                      <div style={{ fontSize: 12, opacity: 0.7 }}>Email</div>
                      <div style={{ fontSize: 16, fontWeight: 700 }}>{formData.email}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 12, opacity: 0.7 }}>System Size</div>
                      <div style={{ fontSize: 16, fontWeight: 700 }}>{formData.systemSize}W</div>
                    </div>
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
                {step > 1 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    style={{
                      flex: 1,
                      padding: '12px 20px',
                      background: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      border: 'none',
                      borderRadius: 4,
                      cursor: 'pointer',
                      fontWeight: 700,
                    }}
                  >
                    ← Back
                  </button>
                )}
                <button
                  onClick={() => step < 3 ? setStep(step + 1) : handleSubmit()}
                  style={{
                    flex: 1,
                    padding: '12px 20px',
                    background: '#E87B2D',
                    color: 'white',
                    border: 'none',
                    borderRadius: 4,
                    cursor: 'pointer',
                    fontWeight: 700,
                  }}
                >
                  {step === 3 ? 'Submit Registration' : 'Continue →'}
                </button>
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 60, marginBottom: 20 }}>✓</div>
              <h2 style={{ fontSize: 32, marginBottom: 12 }}>Registration Complete!</h2>
              <p style={{ fontSize: 16, opacity: 0.8, marginBottom: 32 }}>
                Your DNO registration has been submitted. Check your email for confirmation. Installation-ready installers will contact you soon.
              </p>
              <a href="/" style={{
                display: 'inline-block',
                padding: '12px 28px',
                background: '#E87B2D',
                color: 'white',
                textDecoration: 'none',
                borderRadius: 4,
                fontWeight: 700,
              }}>
                Back to Home
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
