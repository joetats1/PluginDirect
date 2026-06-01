import { useEffect, useState } from 'react';

export default function BestDeals() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(r => r.json())
      .then(data => setProducts(data.slice(0, 4)));
  }, []);

  const tags = ['Best Seller £700', 'Best for Pros', 'Best with Battery', 'Cheapest Overall'];

  return (
    <section className="best-deals">
      <div className="content">
        <h2>Best Plug-In Solar Works</h2>
        
        <div className="deals-grid">
          {products.map((product, i) => (
            <div key={product.id} className="deal-card">
              <div className="tag">{tags[i]}</div>
              <img src={product.image} alt={product.name} onError={(e) => e.target.src = 'https://via.placeholder.com/200x150'} />
              <h4>{product.name}</h4>
              <p className="price">£{product.price}</p>
              <div className="rating">{'⭐'.repeat(Math.floor(product.rating))} ({product.reviews})</div>
              <button className="view-btn">View Deal</button>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .best-deals {
          padding: 60px 8%;
          background: white;
          max-width: 1600px;
          margin: 0 auto;
        }
        h2 {
          font-size: 28px;
          color: #0f2444;
          margin: 0 0 40px;
          font-weight: 700;
        }
        .deals-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .deal-card {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          transition: all 0.3s;
          position: relative;
        }
        .deal-card:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .tag {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #fff3cd;
          color: #856404;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
        }
        .deal-card img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 15px;
        }
        h4 {
          margin: 0 0 10px;
          font-size: 14px;
          color: #0f2444;
        }
        .price {
          font-size: 24px;
          font-weight: 700;
          color: #f4c430;
          margin: 0 0 8px;
        }
        .rating {
          font-size: 12px;
          color: #666;
          margin-bottom: 15px;
        }
        .view-btn {
          width: 100%;
          padding: 10px;
          background: white;
          color: #0f2444;
          border: 2px solid #f4c430;
          border-radius: 6px;
          font-weight: 700;
          cursor: pointer;
        }
        @media (max-width: 1200px) {
          .deals-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
