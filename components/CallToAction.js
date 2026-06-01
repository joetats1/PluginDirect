import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>Ready to Find Your Perfect Plug-In Solar Kit?</h2>
        <p>Join thousands of UK homeowners saving money with plug-in solar</p>
        <div className="cta-buttons">
          <Link href="/compare">
            <button className="btn primary">Compare Kits Now</button>
          </Link>
          <Link href="/calculator">
            <button className="btn secondary">Calculate Savings</button>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .cta {
          padding: 80px 8%;
          background: linear-gradient(135deg, #0f2444 0%, #1a3a5c 100%);
          color: white;
          text-align: center;
          max-width: 1400px;
          margin: 0 auto;
        }
        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }
        h2 {
          font-size: 42px;
          margin-bottom: 15px;
          color: white;
        }
        p {
          font-size: 18px;
          margin-bottom: 40px;
          color: rgba(255,255,255,0.9);
        }
        .cta-buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
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
          background: #e87b2d;
          color: white;
        }
        .btn.primary:hover {
          background: #d66a1b;
          transform: translateY(-2px);
        }
        .btn.secondary {
          border: 2px solid white;
          color: white;
          background: transparent;
        }
        .btn.secondary:hover {
          background: white;
          color: #0f2444;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
