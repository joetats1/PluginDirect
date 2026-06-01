import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <Link href="/">
          <div className="logo">PluginDirect</div>
        </Link>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link href="/">Home</Link>
          <Link href="/compare">Compare Kits</Link>
          <Link href="/calculator">Savings Calculator</Link>
          <Link href="/dno">DNO Registration</Link>
          <Link href="/reviews">Reviews</Link>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
      <style jsx>{`
        .header {
          padding: 18px 8%;
          border-bottom: 1px solid #e5e7eb;
          background: white;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }
        .logo {
          font-weight: 800;
          font-size: 24px;
          color: #0f2444;
          cursor: pointer;
        }
        nav {
          display: flex;
          gap: 30px;
          align-items: center;
        }
        nav a {
          text-decoration: none;
          color: #0f2444;
          font-weight: 500;
          transition: color 0.3s;
        }
        nav a:hover {
          color: #e87b2d;
        }
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }
          nav {
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
          nav.open {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
