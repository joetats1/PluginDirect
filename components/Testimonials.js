export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'London',
      text: 'PluginDirect made comparing solar kits so easy. I saved £400 in year one!',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      location: 'Manchester',
      text: 'The DNO registration wizard saved me hours. Brilliant service.',
      rating: 5,
    },
    {
      name: 'Emma Wilson',
      location: 'Bristol',
      text: 'Finally an unbiased comparison tool. Highly recommended!',
      rating: 5,
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-content">
        <h2>Loved by UK Homeowners</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">{'⭐'.repeat(testimonial.rating)}</div>
              <p className="text">"<strong>{testimonial.text}</strong>"</p>
              <p className="author">{testimonial.name}, {testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .testimonials {
          padding: 70px 8%;
          background: #f8fafc;
          max-width: 1400px;
          margin: 0 auto;
        }
        .testimonials-content {
          text-align: center;
        }
        h2 {
          font-size: 42px;
          color: #0f2444;
          margin-bottom: 50px;
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .testimonial-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        .stars {
          font-size: 20px;
          margin-bottom: 15px;
        }
        .text {
          font-size: 16px;
          color: #333;
          line-height: 1.6;
          margin: 15px 0;
        }
        .author {
          color: #666;
          font-size: 14px;
          margin: 0;
        }
        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
