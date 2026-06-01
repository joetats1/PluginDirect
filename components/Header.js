import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <Link href="/">
          <div className="logo">
            <div className="logo-text">PluginDirect</div>
            <div className="logo-subtitle">Plugin-Brite Solar Insights</div>
          </div>
        </Link>
        
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link href="/compare">Compare Kits</Link>
          <Link href="#">Check Compliance</Link>
          <Link href="/calculator">Savings Calculator</Link>
          <Link href="#">Best Pack</Link>
          <Link href="#">Suppliers</Link>
          <Link href="#">Guides</Link>
        </nav>
        
        <div className="header-actions">
          <button className="login-btn">Login</button>
          <button className="cta-btn">Get Started</button>
        </div>
        
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </div>
      
      <style jsx>{`
        .header {
          background: white;
          border-bottom: 1px solid #e5e7eb;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .header-content {
          padding: 12px 8%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1600px;
          margin: 0 auto;
        }
        .logo {
          cursor: pointer;
        }
        .logo-text {
          font-weight: 800;
          font-size: 20px;
          color: #0f2444;
          margin: 0;
        }
        .logo-subtitle {
          font-size: 11px;
          color: #999;
          margin: 0;
        }
        .nav {
          display: flex;
          gap: 30px;
          align-items: center;
        }
        .nav a {
          text-decoration: none;
          color: #0f2444;
          font-weight: 500;
          font-size: 14px;
          transition: color 0.3s;
        }
        .nav a:hover {
          color: #f4c430;
        }
        .header-actions {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .login-btn {
          background: none;
          border: none;
          color: #0f2444;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
        }
        .cta-btn {
          background: #f4c430;
          color: #0f2444;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 700;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.3s;
        }
        .cta-btn:hover {
          background: #e8b800;
        }
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }
        @media (max-width: 1000px) {
          .nav {
            display: none;
            position: absolute;
            top: 60px;
            right: 20px;
            flex-direction: column;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            gap: 15px;
            z-index: 200;
          }
          .nav.open {
            display: flex;
          }
          .menu-toggle {
            display: block;
          }
          .header-actions {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
