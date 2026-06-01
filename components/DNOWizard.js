import { useState } from 'react';

export default function DNOWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    postcode: '',
    dno: '',
    systemPower: '',
    installationDate: '',
    kitModel: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit to backend
    console.log('Submitting:', formData);
    alert('DNO registration submitted! Check your email for confirmation.');
  };

  return (
    <div className="wizard">
      <div className="progress-bar">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`progress-step ${i <= step ? 'active' : ''}`}>
            {i}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="step">
            <h3>Personal Information</h3>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="step">
            <h3>Property Address</h3>
            <div className="form-group">
              <label htmlFor="address">Full Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="postcode">Postcode</label>
              <input
                type="text"
                id="postcode"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dno">Distribution Network Operator</label>
              <select
                id="dno"
                name="dno"
                value={formData.dno}
                onChange={handleChange}
                required
              >
                <option value="">Select your DNO</option>
                <option value="UKPN">UK Power Networks</option>
                <option value="WPD">Western Power Distribution</option>
                <option value="Equinix">Equinix</option>
                <option value="Northern">Northern Powergrid</option>
                <option value="SEEL">Scottish Electricity</option>
              </select>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="step">
            <h3>System Details</h3>
            <div className="form-group">
              <label htmlFor="systemPower">System Power (W)</label>
              <input
                type="number"
                id="systemPower"
                name="systemPower"
                value={formData.systemPower}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="kitModel">Kit Model</label>
              <input
                type="text"
                id="kitModel"
                name="kitModel"
                value={formData.kitModel}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="installationDate">Installation Date</label>
              <input
                type="date"
                id="installationDate"
                name="installationDate"
                value={formData.installationDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="step">
            <h3>Review & Submit</h3>
            <div className="review">
              <p><strong>Name:</strong> {formData.fullName}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Postcode:</strong> {formData.postcode}</p>
              <p><strong>DNO:</strong> {formData.dno}</p>
              <p><strong>System Power:</strong> {formData.systemPower}W</p>
              <p><strong>Kit Model:</strong> {formData.kitModel}</p>
            </div>
          </div>
        )}

        <div className="button-group">
          <button
            type="button"
            onClick={handlePrev}
            disabled={step === 1}
            className="btn secondary"
          >
            Back
          </button>
          {step < 4 ? (
            <button type="button" onClick={handleNext} className="btn primary">
              Next
            </button>
          ) : (
            <button type="submit" className="btn primary">
              Submit Registration
            </button>
          )}
        </div>
      </form>

      <style jsx>{`
        .wizard {
          background: white;
          padding: 40px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          margin-top: 30px;
        }
        .progress-bar {
          display: flex;
          justify-content: space-between;
          margin-bottom: 40px;
        }
        .progress-step {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          color: #999;
          transition: all 0.3s;
        }
        .progress-step.active {
          background: #0f2444;
          color: white;
          border-color: #0f2444;
        }
        .step {
          margin-bottom: 30px;
        }
        .step h3 {
          margin-top: 0;
          color: #0f2444;
          font-size: 24px;
          margin-bottom: 25px;
        }
        .form-group {
          margin-bottom: 20px;
        }
        label {
          display: block;
          font-weight: 600;
          color: #0f2444;
          margin-bottom: 8px;
        }
        input,
        textarea,
        select {
          width: 100%;
          padding: 12px;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          font-size: 16px;
          font-family: inherit;
          box-sizing: border-box;
        }
        textarea {
          min-height: 100px;
          resize: vertical;
        }
        .review {
          background: #f8fafc;
          padding: 20px;
          border-radius: 8px;
        }
        .review p {
          margin: 10px 0;
          color: #333;
        }
        .button-group {
          display: flex;
          gap: 15px;
          margin-top: 30px;
        }
        .btn {
          flex: 1;
          padding: 14px;
          border-radius: 8px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 16px;
        }
        .btn.primary {
          background: #0f2444;
          color: white;
        }
        .btn.primary:hover:not(:disabled) {
          background: #1a3a5c;
        }
        .btn.secondary {
          background: #e5e7eb;
          color: #0f2444;
        }
        .btn.secondary:hover:not(:disabled) {
          background: #d1d5db;
        }
        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
