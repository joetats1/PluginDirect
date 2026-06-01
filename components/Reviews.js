export default function Reviews({ reviews }) {
  return (
    <div className="reviews-container">
      {reviews.length === 0 ? (
        <p>No reviews yet. Be the first to share your experience!</p>
      ) : (
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="review-info">
                  <h4>{review.title}</h4>
                  <p className="author">{review.author}</p>
                </div>
                {review.verified && <span className="verified">✓ Verified</span>}
              </div>
              <div className="stars">{'⭐'.repeat(review.rating)}</div>
              <p className="review-text">{review.content}</p>
              <p className="review-date">{new Date(review.date).toLocaleDateString('en-GB')}</p>
            </div>
          ))}
        </div>
      )}
      <style jsx>{`
        .reviews-container {
          margin-top: 30px;
        }
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 25px;
        }
        .review-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 25px;
          transition: all 0.3s;
        }
        .review-card:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border-color: #e87b2d;
        }
        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 15px;
        }
        .review-info h4 {
          margin: 0 0 5px;
          color: #0f2444;
          font-size: 18px;
        }
        .author {
          margin: 0;
          color: #666;
          font-size: 14px;
        }
        .verified {
          background: #e87b2d;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
        }
        .stars {
          font-size: 18px;
          margin-bottom: 15px;
        }
        .review-text {
          color: #333;
          line-height: 1.6;
          margin: 15px 0;
        }
        .review-date {
          color: #999;
          font-size: 12px;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
