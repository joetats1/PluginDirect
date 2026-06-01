import { useState, useEffect } from 'react';
import Head from 'next/head';
import Reviews from '../components/Reviews';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews');
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  return (
    <>
      <Head>
        <title>Reviews | PluginDirect</title>
      </Head>
      <div className="reviews-container">
        <h1>Customer Reviews</h1>
        <p>See what our customers think</p>
        <Reviews reviews={reviews} />
      </div>
      <style jsx>{`
        .reviews-container {
          padding: 60px 8%;
          max-width: 1200px;
          margin: 0 auto;
        }
        h1 {
          font-size: 42px;
          margin-bottom: 10px;
          color: #0f2444;
        }
      `}</style>
    </>
  );
}
