export default function SavingsDashboard() {
  return (
    <section className="savings-dashboard">
      <div className="content">
        <h2>How Much Could You Save?</h2>
        
        <div className="dashboard-grid">
          <div className="chart">
            <div className="chart-placeholder">
              <p>Your current monthly saving is at £</p>
              <h3>150</h3>
              <div className="range">
                <span>£15</span>
                <div className="slider"></div>
                <span>£999</span>
              </div>
              <div className="breakdown">
                <div className="item">
                  <label>Estimated Payback Savings</label>
                  <p>£180</p>
                  <small>Based on current usage</small>
                </div>
                <div className="item">
                  <label>Estimated Payback Period</label>
                  <p>3.5 Years</p>
                  <small>Based on current usage</small>
                </div>
              </div>
              <button className="calc-btn">Calculate My Savings</button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .savings-dashboard {
          padding: 60px 8%;
          background: #f8fafc;
          max-width: 1600px;
          margin: 0 auto;
        }
        h2 {
          font-size: 28px;
          color: #0f2444;
          margin: 0 0 40px;
          font-weight: 700;
        }
        .chart-placeholder {
          background: white;
          padding: 40px;
          border-radius: 12px;
          text-align: center;
        }
        .chart-placeholder p {
          margin: 0 0 10px;
          color: #666;
          font-size: 14px;
        }
        .chart-placeholder h3 {
          font-size: 48px;
          color: #f4c430;
          margin: 0 0 20px;
          font-weight: 700;
        }
        .range {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
        }
        .slider {
          flex: 1;
          height: 6px;
          background: linear-gradient(90deg, #ffcccc 0%, #f4c430 50%, #90ee90 100%);
          border-radius: 3px;
        }
        .breakdown {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 30px;
        }
        .item {
          background: #f8fafc;
          padding: 15px;
          border-radius: 8px;
        }
        .item label {
          display: block;
          font-size: 12px;
          color: #666;
          margin-bottom: 8px;
        }
        .item p {
          margin: 0;
          font-size: 24px;
          font-weight: 700;
          color: #0f2444;
        }
        .item small {
          display: block;
          margin-top: 4px;
          font-size: 11px;
          color: #999;
        }
        .calc-btn {
          width: 100%;
          padding: 14px;
          background: #f4c430;
          color: #0f2444;
          border: none;
          border-radius: 6px;
          font-weight: 700;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}
