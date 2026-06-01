import { useState } from 'react';

export default function ComparisonFilters({ onFilterChange }) {
  const [budget, setBudget] = useState(5000);
  const [power, setPower] = useState(400);
  const [brand, setBrand] = useState('all');

  const handleFilterChange = () => {
    onFilterChange({ budget, power, brand });
  };

  return (
    <div className="filters">
      <div className="filter-group">
        <label htmlFor="budget">Budget: £{budget.toLocaleString()}</label>
        <input
          type="range"
          id="budget"
          min="1000"
          max="10000"
          step="500"
          value={budget}
          onChange={(e) => setBudget(parseInt(e.target.value))}
          onMouseUp={handleFilterChange}
          onTouchEnd={handleFilterChange}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="power">Minimum Power: {power}W</label>
        <input
          type="range"
          id="power"
          min="300"
          max="800"
          step="50"
          value={power}
          onChange={(e) => setPower(parseInt(e.target.value))}
          onMouseUp={handleFilterChange}
          onTouchEnd={handleFilterChange}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="brand">Brand</label>
        <select
          id="brand"
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="all">All Brands</option>
          <option value="EcoFlow">EcoFlow</option>
          <option value="Bluetti">Bluetti</option>
          <option value="Anker">Anker</option>
          <option value="Growatt">Growatt</option>
          <option value="SMA">SMA</option>
        </select>
      </div>

      <style jsx>{`
        .filters {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding: 25px;
          background: #f8fafc;
          border-radius: 12px;
          margin-bottom: 30px;
        }
        .filter-group {
          display: flex;
          flex-direction: column;
        }
        label {
          font-weight: 600;
          color: #0f2444;
          margin-bottom: 8px;
          font-size: 14px;
        }
        input[type='range'] {
          cursor: pointer;
        }
        select {
          padding: 8px 12px;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          font-size: 14px;
          font-family: inherit;
        }
        @media (max-width: 900px) {
          .filters {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .filters {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
