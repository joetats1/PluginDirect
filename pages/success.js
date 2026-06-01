import React from 'react';
import Head from 'next/head';

export default function SuccessPage() {
  return (
    <>
      <Head>
        <title>Payment Successful | PluginDirect</title>
      </Head>

      <div style={{ background: '#0F2444', color: 'white', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', maxWidth: 500 }}>
          <div style={{ fontSize: 80, marginBottom: 20 }}>✓</div>
          <h1 style={{ fontSize: 48, marginBottom: 20 }}>Payment Successful!</h1>
          <p style={{ fontSize: 18, opacity: 0.8, marginBottom: 40 }}>
            Your premium subscription is now active. Check your email for login details.
          </p>
          <a href="/dashboard" style={{
            display: 'inline-block',
            padding: '12px 28px',
            background: '#E87B2D',
            color: 'white',
            textDecoration: 'none',
            borderRadius: 4,
            fontWeight: 700,
            transition: 'all 0.15s',
          }}>
            Go to Dashboard →
          </a>
        </div>
      </div>
    </>
  );
}
