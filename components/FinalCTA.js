export default function FinalCTA() {
  return (
    <>
      <section className="final-cta">
        <h2>Start Saving with Plug-In Solar Today</h2>
        <p>Compare the best, most, advice and start saving — educate places</p>
        <div className="buttons">
          <button className="btn primary">Compare Solar Kits</button>
          <button className="btn secondary">Check Compliance Now</button>
        </div>
      </section>
      
      <footer className="footer">
        <div className="content">
          <div className="footer-grid">
            <div className="column">
              <h4>PluginDirect</h4>
              <p>Making plug-in solar simple and accessible for UK homeowners. Compare kits, check compliance and start saving today.</p>
              <div className="social">f t i 🔗</div>
            </div>
            
            <div className="column">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Teams</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Events</a></li>
              </ul>
            </div>
            
            <div className="column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Guides</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            
            <div className="column">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Privacy Statement</a></li>
                <li><a href="#">How to Use Policy</a></li>
              </ul>
            </div>
            
            <div className="column">
              <h4>Newsletter</h4>
              <p>Get the latest guides and pro tips</p>
              <div className="newsletter">
                <input type="email" placeholder="Your email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <style jsx>{`
        .final-cta {
          padding: 80px 8%;
          background: linear-gradient(135deg, #0f2444 0%, #1a3a5c 100%);
          color: white;
          text-align: center;
          max-width: 1600px;
          margin: 0 auto;
        }
        .final-cta h2 {
          font-size: 36px;
          margin: 0 0 15px;
          font-weight: 700;
        }
        .final-cta p {
          font-size: 18px;
          margin: 0 0 30px;
          color: rgba(255,255,255,0.9);
        }
        .buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
        }
        .btn {
          padding: 14px 24px;
          border: none;
          border-radius: 6px;
          font-weight: 700;
          cursor: pointer;
          font-size: 16px;
        }
        .btn.primary {
          background: #f4c430;
          color: #0f2444;
        }
        .btn.secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }
        
        .footer {
          background: #0a1929;
          color: white;
          padding: 60px 8%;
        }
        .content {
          max-width: 1600px;
          margin: 0 auto;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 40px;
          margin-bottom: 40px;
        }
        .column h4 {
          margin: 0 0 15px;
          font-size: 16px;
          font-weight: 700;
        }
        .column p {
          margin: 0 0 15px;
          font-size: 14px;
          color: rgba(255,255,255,0.7);
        }
        .column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .column li {
          margin-bottom: 8px;
        }
        .column a {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 14px;
        }
        .column a:hover {
          color: #f4c430;
        }
        .newsletter input {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 4px;
          margin-bottom: 10px;
          font-family: inherit;
        }
        .newsletter button {
          width: 100%;
          padding: 10px;
          background: #f4c430;
          color: #0f2444;
          border: none;
          border-radius: 4px;
          font-weight: 700;
          cursor: pointer;
        }
        @media (max-width: 900px) {
          .buttons {
            flex-direction: column;
          }
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </>
  );
}
