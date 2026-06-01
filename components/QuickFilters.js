import { useState } from 'react';

export default function QuickFilters() {
  const [filters, setFilters] = useState({
    propertyType: '',
    installationType: '',
    budget: '',
  });

  return (
    <section className="quick-filters">
      <div className="filters-content">
        <h3>What are you looking for?</h3>
        
        <div className="filters-grid">
          <div className="filter-group">
            <label>Property type</label>
            <select value={filters.propertyType} onChange={(e) => setFilters({...filters, propertyType: e.target.value})}>
              <option value="">Select property type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Installation type</label>
            <select value={filters.installationType} onChange={(e) => setFilters({...filters, installationType: e.target.value})}>
              <option value="">Select installation type</option>
              <option value="roof">Roof Mounted</option>
              <option value="wall">Wall Mounted</option>
              <option value="balcony">Balcony</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Budget</label>
            <select value={filters.budget} onChange={(e) => setFilters({...filters, budget: e.target.value})}>
              <option value="">Select your budget</option>
              <option value="1000">Up to £1,000</option>
              <option value="2000">£1,000 - £2,000</option>
              <option value="3000">£2,000 - £3,000</option>
              <option value="5000">£3,000+</option>
            </select>
          </div>
        </div>
        
        <div className="matches-info">
          <button className="show-matches-btn">Show My Matches</button>
          <div className="user-info">
            <div className="avatars">
              <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="user" />
              <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="user" />
              <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="user" />
            </div>
            <p>Join 8,230+ homebuyers<br /><strong>Saving money</strong></p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .quick-filters {
          padding: 40px 8%;
          background: white;
          max-width: 1600px;
          margin: 0 auto;
          border-bottom: 1px solid #e5e7eb;
        }
        .filters-content {
          display: grid;
          grid-template-columns: 1fr 3fr;
          gap: 30px;
          align-items: flex-start;
        }
        h3 {
          font-size: 18px;
          color: #0f2444;
          margin: 0;
          font-weight: 700;
        }
        .filters-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }
        .filter-group {
          display: flex;
          flex-direction: column;
        }
        label {
          font-size: 13px;
          font-weight: 600;
          color: #666;
          margin-bottom: 6px;
        }
        select {
          padding: 10px 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 14px;
          font-family: inherit;
        }
        .matches-info {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        .show-matches-btn {
          background: #f4c430;
          color: #0f2444;
          border: none;
          padding: 12px 20px;
          border-radius: 6px;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
        }
        .show-matches-btn:hover {
          background: #e8b800;
        }
        .avatars {
          display: flex;
          margin-left: -10px;
        }
        .avatars img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid white;
          margin-left: -10px;
        }
        .user-info p {
          font-size: 12px;
          color: #666;
          margin: 0;
        }
        @media (max-width: 900px) {
          .filters-content {
            grid-template-columns: 1fr;
          }
          .filters-grid {
            grid-template-columns: 1fr;
          }
          .matches-info {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
}
