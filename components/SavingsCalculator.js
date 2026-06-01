import { useState } from 'react';

export default function SavingsCalculator({ onCalculate, results }) {
  const [formData, setFormData] = useState({
    postcode: '',
    kitSize: 400,
    consumption: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onCalculate(formData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit} className="calculator-form">
        <div className="form-group">
          <label htmlFor="postcode">Your Postcode</label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            placeholder="e.g., SW1A 1AA"
            value={formData.postcode}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="kitSize">Kit Size: {formData.kitSize}W</label>
          <input
            type="range"
            id="kitSize"
            name="kitSize"
            min="300"
            max="800"
            step="50"
            value={formData.kitSize}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="consumption">Annual Energy Consumption (kWh) - Optional</label>
          <input
            type="number"
            id="consumption"
            name="consumption"
            placeholder="Leave blank for average estimate"
            value={formData.consumption}
            onChange={handleChange}
          />
        </div>

        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? 'Calculating...' : 'Calculate My Savings'}
        </button>
      </form>

      {results && (
        <div className="results">
          <h3>Your Savings Potential</h3>
          <div className="results-grid">
            <div className="result-card">
              <p className="label">Annual Generation</p>
              <p className="value">{results.annualGeneration} kWh</p>
            </div>
            <div className="result-card">
              <p className="label">Annual Savings</p>
              <p className="value">£{results.annualSavings}</p>
            </div>
            <div className="result-card">
              <p className="label">System Cost</p>
              <p className="value">£{results.systemCost.toLocaleString()}</p>
            </div>
            <div className="result-card">
              <p className="label">Payback Period</p>
              <p className="value">{results.paybackYears} years</p>
            </div>
            <div className="result-card">
              <p className="label">25 Year ROI</p>
              <p className="value">£{results.roi25Year.toLocaleString()}</p>
            </div>
            <div className="result-card">
              <p className="label">Recommended Kit</p>
              <p className="value" style={{ fontSize: '14px' }}>{results.recommendedKit}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .calculator {
          margin-top: 40px;
        }
        .calculator-form {
          background: white;
          padding: 30px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          margin-bottom: 30px;
        }
        .form-group {
          margin-bottom: 25px;
        }
        label {
          display: block;
          font-weight: 600;
          color: #0f2444;
          margin-bottom: 8px;
          font-size: 14px;
        }
        input {
          width: 100%;
          padding: 12px;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          font-size: 16px;
          font-family: inherit;
        }
        input[type='range'] {
          padding: 0;
          border: none;
        }
        .submit-btn {
          width: 100%;
          padding: 14px;
          background: #0f2444;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.3s;
        }
        .submit-btn:hover:not(:disabled) {
          background: #1a3a5c;
        }
        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .results {
          background: #f8fafc;
          padding: 30px;
          border-radius: 12px;
          border: 2px solid #e87b2d;
        }
        .results h3 {
          margin-top: 0;
          color: #0f2444;
          font-size: 24px;
          margin-bottom: 25px;
        }
        .results-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .result-card {
          background: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
        }
        .result-card .label {
          font-size: 12px;
          color: #666;
          margin: 0;
        }
        .result-card .value {
          font-size: 24px;
          font-weight: 700;
          color: #e87b2d;
          margin: 8px 0 0;
        }
        @media (max-width: 900px) {
          .results-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .results-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
