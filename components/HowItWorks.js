export default function HowItWorks() {
  const steps = [
    { number: 1, title: 'Compare Kits', desc: 'Find the right kit and get home and insight' },
    { number: 2, title: 'Check Compliance', desc: 'We verify regulations so you stay fully compliant' },
    { number: 3, title: 'Start Saving', desc: 'Install in minutes and start reducing over time' },
  ];

  return (
    <section className="how-it-works">
      <div className="content">
        <h2>How Plug-In Solar Works</h2>
        
        <div className="steps">
          {steps.map((step, i) => (
            <div key={step.number} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <p className="icon">👥</p>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {i < steps.length - 1 && <div className="arrow">→</div>}
            </div>
          ))}
        </div>
        
        <div className="cta-box">
          <h3>Ready to start saving?</h3>
          <p>Join thousands of UK homeowners saving money with plug-in solar</p>
          <button className="cta-btn">Compare Kits Now</button>
        </div>
      </div>
      
      <style jsx>{`
        .how-it-works {
          padding: 60px 8%;
          background: #f8fafc;
          max-width: 1600px;
          margin: 0 auto;
        }
        h2 {
          font-size: 32px;
          color: #0f2444;
          text-align: center;
          margin: 0 0 50px;
          font-weight: 700;
        }
        .steps {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 60px;
        }
        .step {
          flex: 1;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .step-number {
          width: 50px;
          height: 50px;
          background: #0f2444;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .step-content .icon {
          font-size: 40px;
          margin: 0 0 10px;
        }
        .step-content h3 {
          margin: 0 0 8px;
          font-size: 18px;
          color: #0f2444;
        }
        .step-content p {
          margin: 0;
          color: #666;
          font-size: 14px;
        }
        .arrow {
          position: absolute;
          right: -25px;
          top: 25px;
          font-size: 24px;
          color: #999;
        }
        .cta-box {
          background: #0f2444;
          color: white;
          padding: 40px;
          border-radius: 12px;
          text-align: center;
        }
        .cta-box h3 {
          font-size: 24px;
          margin: 0 0 10px;
        }
        .cta-box p {
          margin: 0 0 20px;
          color: rgba(255,255,255,0.9);
        }
        .cta-btn {
          background: #f4c430;
          color: #0f2444;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 700;
          cursor: pointer;
        }
        @media (max-width: 900px) {
          .steps {
            flex-direction: column;
            gap: 40px;
          }
          .arrow {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
