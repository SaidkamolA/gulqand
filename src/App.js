import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import './App.css';
import i18n from './i18n/i18n';

import { SUPPORTED_LANGS, DEFAULT_LANG } from './config/site';
import SEO from './components/SEO';
import GoogleAnalytics from './components/GoogleAnalytics';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import heroBg from './assets/hero.jpg';

const About = lazy(() => import('./components/About'));
const Products = lazy(() => import('./components/Products'));
const Benefits = lazy(() => import('./components/Benefits'));
const Gallery = lazy(() => import('./components/Gallery'));
const Contact = lazy(() => import('./components/Contact'));

const sectionFallback = (
  <div className="seo-section-fallback" style={{ minHeight: '40vh' }} aria-hidden />
);

function LocalizedHome() {
  const { lang } = useParams();

  useEffect(() => {
    if (SUPPORTED_LANGS.includes(lang)) {
      i18n.changeLanguage(lang);
      localStorage.setItem('language', lang);
    }
  }, [lang]);

  if (!SUPPORTED_LANGS.includes(lang)) {
    return <Navigate to={`/${DEFAULT_LANG}`} replace />;
  }

  return (
    <div className="app">
      <SEO lang={lang} heroPreloadUrl={heroBg} />
      <header>
        <Navbar />
      </header>
      <main id="main-content">
        <Hero />
        <Suspense fallback={sectionFallback}>
          <About />
          <Products />
          <Benefits />
          <Gallery />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <GoogleAnalytics />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to={`/${DEFAULT_LANG}`} replace />} />
        <Route path="/:lang" element={<LocalizedHome />} />
        <Route path="*" element={<Navigate to={`/${DEFAULT_LANG}`} replace />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
