import { useState, useEffect } from 'react';
import Head from 'next/head';
import KitComparison from '../components/KitComparison';
import ComparisonFilters from '../components/ComparisonFilters';

export default function Compare() {
  const [kits, setKits] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    budget: 5000,
    power: 400,
    brand: 'all',
  });

  useEffect(() => {
    fetchKits();
  }, []);

  const fetchKits = async () => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      setKits(data);
      setFiltered(data);
    } catch (error) {
      console.error('Error fetching kits:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    const filtered = kits.filter((kit) => {
      return (
        kit.price <= newFilters.budget &&
        kit.power >= newFilters.power &&
        (newFilters.brand === 'all' || kit.brand === newFilters.brand)
      );
    });
    setFiltered(filtered);
  };

  return (
    <>
      <Head>
        <title>Compare Plug-In Solar Kits | PluginDirect</title>
      </Head>
      <div className="compare-container">
        <h1>Compare Plug-In Solar Kits</h1>
        <p>Find the perfect system for your home</p>
        
        <ComparisonFilters onFilterChange={handleFilterChange} />
        
        {loading ? (
          <p>Loading kits...</p>
        ) : (
          <>
            <p className="result-count">{filtered.length} kits found</p>
            <KitComparison kits={filtered} />
          </>
        )}
      </div>
      <style jsx>{`
        .compare-container {
          padding: 60px 8%;
          max-width: 1400px;
          margin: 0 auto;
        }
        h1 {
          font-size: 42px;
          margin-bottom: 10px;
          color: #0f2444;
        }
        .result-count {
          color: #666;
          margin: 20px 0;
        }
      `}</style>
    </>
  );
}
