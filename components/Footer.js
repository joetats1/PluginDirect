import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>About PluginDirect</h4>
          <p>The UK's independent plug-in solar marketplace, helping homeowners find the perfect system.</p>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/compare">Compare Kits</Link></li>
            <li><Link href="/calculator">Savings Calculator</Link></li>
            <li><Link href="/dno">DNO Registration</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><Link href="#">FAQ</Link></li>
            <li><Link href="#">Contact</Link></li>
            <li><Link href="#">Privacy</Link></li>
            <li><Link href="#">Terms</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Newsletter</h4>
          <p>Get solar tips and updates</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 PluginDirect.co.uk - All rights reserved</p>
      </div>
      <style jsx>{`
        .footer {
          background: #0f2444;
          color: white;
          padding: 60px 8% 20px;
        }
        .footer-content {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          max-width: 1400px;
          margin: 0 auto 40px;
        }
        .footer-column h4 {
          margin-top: 0;
          font-size: 16px;
          margin-bottom: 15px;
        }
        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-column ul li {
          margin-bottom: 8px;
        }
        .footer-column a {
          color: #e87b2d;
          text-decoration: none;
        }
        .footer-column a:hover {
          text-decoration: underline;
        }
        input {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 4px;
          margin-bottom: 10px;
        }
        button {
          width: 100%;
          padding: 10px;
          background: #e87b2d;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
        }
        button:hover {
          background: #d66a1b;
        }
        .footer-bottom {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.1);
          max-width: 1400px;
          margin: 0 auto;
        }
        @media (max-width: 900px) {
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
        }
        @media (max-width: 600px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
