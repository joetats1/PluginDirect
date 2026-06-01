import Link from 'next/link';

export default function ComparisonHero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Compare Plug-In<br />Solar Kits in the UK</h1>
        <p className="highlight">(Fully 2026 Compliant)</p>
        <p className="description">Find the cheapest, safest, and regulation-approved solar kits under 800W — no electrician required.</p>
        <div className="hero-buttons">
          <Link href="/compare">
            <button className="btn primary">Compare Solar Kits</button>
          </Link>
          <button className="btn secondary">Check If Your Home Qualifies</button>
        </div>
        <div className="trust-badges">
          <div className="badge">❤️ UK Regulation Checked</div>
          <div className="badge">✓ DNO Compliant Quotes</div>
          <div className="badge">⭐ 4.6/5 User Rating</div>
          <div className="badge">🔒 No Spam, No Obligation</div>
        </div>
      </div>
      
      <div className="hero-right">
        <img src="https://images.unsplash.com/photo-1521582029563-6e1e1edfdc2f?w=600&h=500&fit=crop" alt="Solar Panel" />
      </div>
      
      <style jsx>{`
        .hero {
          padding: 60px 8%;
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
          max-width: 1600px;
          margin: 0 auto;
        }
        h1 {
          font-size: 52px;
          line-height: 1.2;
          color: #0f2444;
          margin: 0 0 10px;
        }
        .highlight {
          font-size: 24px;
          color: #f4c430;
          font-weight: 700;
          margin: 0 0 20px;
        }
        .description {
          font-size: 18px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 25px;
        }
        .hero-buttons {
          display: flex;
          gap: 15px;
          margin-bottom: 30px;
        }
        .btn {
          padding: 14px 24px;
          border-radius: 8px;
          border: none;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .btn.primary {
          background: #f4c430;
          color: #0f2444;
        }
        .btn.primary:hover {
          background: #e8b800;
        }
        .btn.secondary {
          background: white;
          color: #0f2444;
          border: 2px solid #0f2444;
        }
        .btn.secondary:hover {
          background: #f0f0f0;
        }
        .trust-badges {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .badge {
          font-size: 13px;
          color: #0f2444;
          font-weight: 600;
          padding: 8px 0;
        }
        .hero-right img {
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
        }
        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
          }
          h1 {
            font-size: 36px;
          }
          .hero-buttons {
            flex-direction: column;
          }
          .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
