export default function Features() {
  const features = [
    {
      title: 'Compare Every Kit',
      description: 'Independent comparison engine covering all major brands',
      icon: '🔍',
    },
    {
      title: 'AI Kit Finder',
      description: 'Smart matching algorithm recommends the best system for you',
      icon: '🤖',
    },
    {
      title: 'DNO Wizard',
      description: 'Complete registration with your distribution network operator in minutes',
      icon: '✨',
    },
    {
      title: 'Savings Calculator',
      description: 'Accurate postcode-based ROI and payback calculations',
      icon: '💰',
    },
    {
      title: 'Installation Help',
      description: 'Find approved installers and get professional guidance',
      icon: '🔧',
    },
    {
      title: 'Lifetime Support',
      description: 'Expert support throughout your solar journey',
      icon: '📞',
    },
  ];

  return (
    <section className="features">
      <div className="features-content">
        <h2>Why Choose PluginDirect?</h2>
        <p className="subtitle">Everything you need to go solar with confidence</p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .features {
          padding: 70px 8%;
          background: white;
          max-width: 1400px;
          margin: 0 auto;
        }
        .features-content {
          text-align: center;
        }
        h2 {
          font-size: 42px;
          color: #0f2444;
          margin-bottom: 10px;
        }
        .subtitle {
          font-size: 18px;
          color: #666;
          margin-bottom: 50px;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .feature-card {
          padding: 30px;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          transition: all 0.3s;
          text-align: left;
        }
        .feature-card:hover {
          border-color: #e87b2d;
          box-shadow: 0 10px 30px rgba(232, 123, 45, 0.1);
          transform: translateY(-5px);
        }
        .icon {
          font-size: 40px;
          margin-bottom: 15px;
        }
        .feature-card h3 {
          font-size: 20px;
          color: #0f2444;
          margin: 0 0 10px;
        }
        .feature-card p {
          color: #666;
          margin: 0;
          line-height: 1.6;
        }
        @media (max-width: 900px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
