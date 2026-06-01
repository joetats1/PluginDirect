export default function Guides() {
  const guides = [
    {
      title: 'Do Plug-In Solar Panels Need Permission in the UK?',
      image: 'https://images.unsplash.com/photo-1509391366360-2e938811b26e?w=300&h=200&fit=crop',
    },
    {
      title: 'Real Plug-In Solar Kits in the UK (2025)',
      image: 'https://images.unsplash.com/photo-1495441652103-cf4a4ddeab84?w=300&h=200&fit=crop',
    },
    {
      title: 'Is 800W Enough for My Home?',
      image: 'https://images.unsplash.com/photo-1620055287350-a48fc8752de5?w=300&h=200&fit=crop',
    },
    {
      title: 'Plug-In Solar in Traditional Solar: What\'s the Difference?',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=300&h=200&fit=crop',
    },
  ];

  return (
    <section className="guides">
      <div className="content">
        <div className="header-row">
          <h2>Latest Guides & Articles</h2>
          <a href="#">View all guides →</a>
        </div>
        
        <div className="guides-grid">
          {guides.map((guide, i) => (
            <div key={i} className="guide-card">
              <img src={guide.image} alt={guide.title} />
              <h3>{guide.title}</h3>
              <a href="#" className="read-more">Read article →</a>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .guides {
          padding: 60px 8%;
          background: #f8fafc;
          max-width: 1600px;
          margin: 0 auto;
        }
        .content {
          width: 100%;
        }
        .header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }
        h2 {
          font-size: 28px;
          color: #0f2444;
          margin: 0;
          font-weight: 700;
        }
        .header-row a {
          color: #0f2444;
          text-decoration: none;
          font-weight: 600;
        }
        .guides-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .guide-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s;
        }
        .guide-card:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .guide-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }
        h3 {
          padding: 16px;
          margin: 0;
          font-size: 14px;
          color: #0f2444;
          line-height: 1.4;
        }
        .read-more {
          display: block;
          padding: 0 16px 16px;
          color: #f4c430;
          text-decoration: none;
          font-weight: 600;
          font-size: 13px;
        }
        @media (max-width: 1200px) {
          .guides-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
