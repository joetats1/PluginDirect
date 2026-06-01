import { useState } from 'react';
import Head from 'next/head';
import DNOWizard from '../components/DNOWizard';

export default function DNO() {
  const [step, setStep] = useState(1);

  return (
    <>
      <Head>
        <title>DNO Registration Wizard | PluginDirect</title>
      </Head>
      <div className="dno-container">
        <h1>DNO Registration Wizard</h1>
        <p>Complete your distribution network operator registration in minutes</p>
        <DNOWizard />
      </div>
      <style jsx>{`
        .dno-container {
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
