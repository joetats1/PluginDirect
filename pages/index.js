import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CallToAction from '../components/CallToAction';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Head>
        <title>PluginDirect | UK's Independent Plug-In Solar Marketplace</title>
        <meta name="description" content="Compare every major UK plug-in solar system, calculate your savings, and complete your DNO registration—all in one place." />
      </Head>
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
    </>
  );
}
