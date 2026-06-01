import Head from 'next/head';
import Header from '../components/Header';
import ComparisonHero from '../components/ComparisonHero';
import QuickFilters from '../components/QuickFilters';
import TopProducts from '../components/TopProducts';
import HowItWorks from '../components/HowItWorks';
import ComplianceChecker from '../components/ComplianceChecker';
import SavingsDashboard from '../components/SavingsDashboard';
import BestDeals from '../components/BestDeals';
import Guides from '../components/Guides';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <>
      <Head>
        <title>Compare Plug-In Solar Kits in the UK | PluginDirect</title>
        <meta name="description" content="Find the cheapest, safest, and regulation-approved solar kits under 800W. No electrician required." />
      </Head>
      <Header />
      <main>
        <ComparisonHero />
        <QuickFilters />
        <TopProducts />
        <HowItWorks />
        <ComplianceChecker />
        <SavingsDashboard />
        <BestDeals />
        <Guides />
        <Testimonials />
        <FinalCTA />
      </main>
    </>
  );
}
