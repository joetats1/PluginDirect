export default function ComplianceChecker() {
  return (
    <section className="compliance-checker">
      <div className="content">
        <h2>Check If Plug-In Solar Is Legal for Your Home</h2>
        
        <div className="grid">
          <div className="checker">
            <form>
              <div className="form-group">
                <label>Postcode</label>
                <input type="text" placeholder="Enter your postcode" />
              </div>
              
              <div className="form-group">
                <label>Property type</label>
                <select>
                  <option>Select property type</option>
                  <option>House</option>
                  <option>Flat</option>
                  <option>Commercial</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>System size</label>
                <select>
                  <option>Up to 800W</option>
                  <option>500W</option>
                  <option>600W</option>
                </select>
              </div>
              
              <button type="submit" className="check-btn">Check Now - It's Free</button>
            </form>
          </div>
          
          <div className="map-info">
            <div className="map">
              <div className="uk-map-placeholder">
                <p>UK Distribution Map</p>
                <div className="legend">
                  <div className="legend-item"><span className="green"></span> No DNO Required</div>
                  <div className="legend-item"><span className="yellow"></span> Requires Form</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .compliance-checker {
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
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        .form-group {
          margin-bottom: 20px;
        }
        label {
          display: block;
          font-weight: 600;
          color: #0f2444;
          margin-bottom: 6px;
          font-size: 14px;
        }
        input, select {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-family: inherit;
          font-size: 14px;
          box-sizing: border-box;
        }
        .check-btn {
          width: 100%;
          padding: 12px;
          background: #2e7d32;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 700;
          cursor: pointer;
          margin-top: 10px;
        }
        .check-btn:hover {
          background: #27632a;
        }
        .map {
          background: #e8f5e9;
          border-radius: 12px;
          padding: 40px;
          text-align: center;
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .uk-map-placeholder {
          text-align: center;
        }
        .uk-map-placeholder p {
          margin: 0 0 20px;
          font-weight: 600;
          color: #0f2444;
        }
        .legend {
          display: flex;
          gap: 30px;
          justify-content: center;
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }
        .green, .yellow {
          width: 20px;
          height: 20px;
          border-radius: 3px;
        }
        .green {
          background: #2e7d32;
        }
        .yellow {
          background: #f4c430;
        }
        @media (max-width: 900px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
