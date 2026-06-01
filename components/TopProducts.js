import { useEffect, useState } from 'react';

export default function TopProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(r => r.json())
      .then(data => setProducts(data.slice(0, 3)));
  }, []);

  return (
    <section className="top-products">
      <div className="content">
        <div className="header-row">
          <h2>Top Plug-In Solar Kits This Month</h2>
          <a href="#">View all kits →</a>
        </div>
        
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>OUTPUT</th>
                <th>PAYBACK</th>
                <th>COMPLIANCE</th>
                <th>RATING</th>
                <th>VIEW DEAL</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="product-cell">
                    <img src={product.image} alt={product.name} onError={(e) => e.target.src = 'https://via.placeholder.com/80x60?text=' + product.brand} />
                    <div>
                      <p className="product-name">{product.name}</p>
                      <p className="product-brand">{product.brand}</p>
                    </div>
                  </td>
                  <td className="price">£{product.price}</td>
                  <td className="output">{product.power}W Peak Output</td>
                  <td className="payback">3.2 yrs Per Payback</td>
                  <td className="compliance"><span className="badge compliant">✓ Compliant</span> No DNO required</td>
                  <td className="rating">{"⭐".repeat(Math.floor(product.rating))} ({product.reviews})</td>
                  <td className="cta"><button className="view-deal">View Deal →</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <style jsx>{`
        .top-products {
          padding: 60px 8%;
          background: white;
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
          margin-bottom: 30px;
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
        .table-wrapper {
          overflow-x: auto;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        thead {
          background: #f8fafc;
        }
        th {
          padding: 12px;
          text-align: left;
          font-size: 12px;
          font-weight: 700;
          color: #666;
          border-bottom: 2px solid #e5e7eb;
        }
        td {
          padding: 16px 12px;
          border-bottom: 1px solid #e5e7eb;
          font-size: 14px;
        }
        .product-cell {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .product-cell img {
          width: 60px;
          height: 60px;
          border-radius: 6px;
          object-fit: cover;
        }
        .product-name {
          margin: 0;
          font-weight: 600;
          color: #0f2444;
        }
        .product-brand {
          margin: 4px 0 0;
          color: #999;
          font-size: 12px;
        }
        .price {
          font-weight: 700;
          color: #f4c430;
        }
        .compliance .badge {
          background: #e8f5e9;
          color: #2e7d32;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
        }
        .view-deal {
          background: #f4c430;
          color: #0f2444;
          border: none;
          padding: 8px 12px;
          border-radius: 4px;
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
        }
        .view-deal:hover {
          background: #e8b800;
        }
      `}</style>
    </section>
  );
}
