import { useState } from 'react';
import Head from 'next/head';
import SavingsCalculator from '../components/SavingsCalculator';

export default function Calculator() {
  const [results, setResults] = useState(null);

  const handleCalculate = async (data) => {
    try {
      const response = await fetch('/api/savings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setResults(result);
    } catch (error) {
      console.error('Error calculating savings:', error);
    }
  };

  return (
    <>
      <Head>
        <title>Savings Calculator | PluginDirect</title>
      </Head>
      <div className="calculator-container">
        <h1>Plug-In Solar Savings Calculator</h1>
        <p>See how much you could save with plug-in solar</p>
        <SavingsCalculator onCalculate={handleCalculate} results={results} />
      </div>
      <style jsx>{`
        .calculator-container {
          padding: 60px 8%;
          max-width: 900px;
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
