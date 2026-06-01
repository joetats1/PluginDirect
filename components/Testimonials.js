export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="content">
        <div className="left">
          <h2>We compare trusted UK suppliers<br />so you don't have to.</h2>
          
          <div className="rating-box">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>4.8 out of 5 on 1250+ reviews</p>
            <p className="site">Trustpilot</p>
          </div>
        </div>
        
        <div className="right">
          <div className="testimonial">
            <p>"The platform makes it so easy to compare kits and get the best advice of consumers. Got me all informed and sorted - brilliant!"</p>
            <div className="author">
              <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="John" />
              <div>
                <p className="name">John B.</p>
                <p className="location">Bristol</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .testimonials {
          padding: 60px 8%;
          background: white;
          max-width: 1600px;
          margin: 0 auto;
        }
        .content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        h2 {
          font-size: 28px;
          color: #0f2444;
          margin: 0 0 40px;
          line-height: 1.4;
          font-weight: 700;
        }
        .rating-box {
          background: #f8fafc;
          padding: 20px;
          border-radius: 12px;
        }
        .stars {
          font-size: 20px;
          margin-bottom: 10px;
        }
        .rating-box p {
          margin: 8px 0;
          font-size: 14px;
          color: #666;
        }
        .site {
          font-weight: 700 !important;
          color: #0f2444 !important;
        }
        .testimonial {
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          padding: 25px;
        }
        .testimonial p {
          margin: 0 0 20px;
          font-style: italic;
          color: #666;
        }
        .author {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .author img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
        }
        .name {
          margin: 0;
          font-weight: 700;
          color: #0f2444;
          font-size: 14px;
        }
        .location {
          margin: 4px 0 0;
          font-size: 12px;
          color: #999;
        }
      `}</style>
    </section>
  );
}
