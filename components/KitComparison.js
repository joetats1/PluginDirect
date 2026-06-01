export default function KitComparison({ kits }) {
  return (
    <div className="comparison-table">
      {kits.length === 0 ? (
        <p className="no-results">No kits found matching your criteria. Try adjusting your filters.</p>
      ) : (
        <div className="kits-grid">
          {kits.map((kit) => (
            <div key={kit.id} className="kit-card">
              <div className="kit-image">{kit.brand}</div>
              <h3>{kit.name}</h3>
              <div className="rating">
                <span className="stars">{'⭐'.repeat(Math.floor(kit.rating))}</span>
                <span className="rating-text">{kit.rating}/5 ({kit.reviews} reviews)</span>
              </div>
              <div className="specs">
                <p><strong>Power:</strong> {kit.power}W</p>
                <p><strong>Efficiency:</strong> {kit.efficiency}%</p>
                <p><strong>Warranty:</strong> {kit.warranty} years</p>
              </div>
              <div className="price">
                <p className="price-value">£{kit.price.toLocaleString()}</p>
              </div>
              <button className="view-btn">View Details</button>
            </div>
          ))}
        </div>
      )}
      <style jsx>{`
        .comparison-table {
          margin-top: 30px;
        }
        .kits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 25px;
        }
        .kit-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 20px;
          transition: all 0.3s;
          display: flex;
          flex-direction: column;
        }
        .kit-card:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border-color: #e87b2d;
          transform: translateY(-5px);
        }
        .kit-image {
          background: #f0f0f0;
          padding: 40px;
          border-radius: 8px;
          text-align: center;
          font-weight: 600;
          color: #666;
          margin-bottom: 15px;
        }
        h3 {
          margin: 0 0 12px;
          font-size: 18px;
          color: #0f2444;
        }
        .rating {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }
        .stars {
          font-size: 16px;
        }
        .rating-text {
          font-size: 12px;
          color: #666;
        }
        .specs {
          flex-grow: 1;
          margin-bottom: 15px;
        }
        .specs p {
          margin: 8px 0;
          font-size: 14px;
          color: #666;
        }
        .price {
          margin: 15px 0;
          padding: 15px;
          background: #f8fafc;
          border-radius: 8px;
        }
        .price-value {
          margin: 0;
          font-size: 24px;
          font-weight: 700;
          color: #e87b2d;
        }
        .view-btn {
          padding: 12px;
          background: #0f2444;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        .view-btn:hover {
          background: #1a3a5c;
        }
        .no-results {
          text-align: center;
          padding: 40px;
          color: #666;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
}
