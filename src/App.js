import React from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import './App.css';
import { DEFAULT_LANG, SUPPORTED_LANGS } from './config/site';
import GoogleAnalytics from './components/GoogleAnalytics';
import ScrollToTop from './components/ScrollToTop';
import GulkandLanding from './components/GulkandLanding';

function LangRedirect() {
  const { lang } = useParams();
  const safeLang = SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
  return <Navigate to={`/${safeLang}/gulkand`} replace />;
}

function App() {
  return (
    <HelmetProvider>
      <GoogleAnalytics />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to={`/${DEFAULT_LANG}/gulkand`} replace />} />
        <Route path="/:lang/gulkand" element={<GulkandLanding />} />
        <Route path="/:lang" element={<LangRedirect />} />
        <Route path="*" element={<Navigate to={`/${DEFAULT_LANG}/gulkand`} replace />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
