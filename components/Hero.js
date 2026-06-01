import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find the Perfect <span className="accent">Plug-In Solar Kit</span> in 60 Seconds</h1>
        <p>Compare every major UK plug-in solar system, calculate your savings, and complete your DNO registration—all in one place.</p>
        <div className="cta-buttons">
          <Link href="/compare">
            <button className="btn primary">Find My Kit</button>
          </Link>
          <Link href="/calculator">
            <button className="btn secondary">Check My Savings</button>
          </Link>
        </div>
      </div>
      <div className="hero-card">
        <h3>⚡ Instant Savings Calculator</h3>
        <div className="feature-list">
          <p>✓ Postcode based estimates</p>
          <p>✓ Annual savings forecast</p>
          <p>✓ Payback calculation</p>
          <p>✓ Recommended kit</p>
        </div>
      </div>
      <style jsx>{`
        .hero {
          padding: 80px 8%;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          background: #f8fafc;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }
        h1 {
          font-size: 56px;
          line-height: 1.1;
          margin: 0 0 20px;
          color: #0f2444;
        }
        .accent {
          color: #e87b2d;
        }
        p {
          font-size: 18px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 30px;
        }
        .cta-buttons {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }
        .btn {
          padding: 14px 24px;
          border-radius: 8px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s;
          font-size: 16px;
        }
        .btn.primary {
          background: #0f2444;
          color: white;
        }
        .btn.primary:hover {
          background: #1a3a5c;
          transform: translateY(-2px);
        }
        .btn.secondary {
          border: 2px solid #0f2444;
          color: #0f2444;
          background: white;
        }
        .btn.secondary:hover {
          background: #f0f0f0;
          transform: translateY(-2px);
        }
        .hero-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }
        .hero-card h3 {
          margin-top: 0;
          color: #0f2444;
          font-size: 20px;
          margin-bottom: 20px;
        }
        .feature-list p {
          margin: 10px 0;
          font-size: 16px;
        }
        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
          }
          h1 {
            font-size: 42px;
          }
        }
      `}</style>
    </section>
  );
}
