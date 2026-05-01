import React from 'react';
import { useParams } from 'react-router-dom';
import SEO from './SEO';
import LanguageSwitcher from './LanguageSwitcher';
import { DEFAULT_LANG, SUPPORTED_LANGS, getSiteUrl } from '../config/site';
import { GULKAND_LANDING_CONTENT } from '../content/gulkandLandingContent';
import { buildGulkandStructuredData } from '../utils/structuredData';
import heroBg from '../assets/hero.jpg';
import '../styles/GulkandLanding.css';

function GulkandLanding() {
  const { lang = DEFAULT_LANG } = useParams();
  const safeLang = SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
  const content = GULKAND_LANDING_CONTENT[safeLang];
  const siteUrl = getSiteUrl();

  const jsonLd = buildGulkandStructuredData(safeLang, {
    heading: content.heading,
    intro: content.intro,
    faq: content.faq,
    product: content.product,
    url: `${siteUrl}/${safeLang}/gulkand`,
    image: `${siteUrl}/logo.png`,
  });

  return (
    <div className="gulkand-page">
      <SEO
        lang={safeLang}
        title={content.seo.title}
        description={content.seo.description}
        keywords={content.seo.keywords}
        pathSuffix="/gulkand"
        heroPreloadUrl={heroBg}
        structuredData={jsonLd}
      />
      <main className="gulkand-main">
        <section className="gulkand-hero">
          <div className="container gulkand-hero-inner">
            <div className="gulkand-hero-top">
              <LanguageSwitcher />
            </div>
            <h1>{content.heading}</h1>
            <p>{content.intro}</p>
            <img src={heroBg} alt={content.imageAlt} width={1200} height={630} loading="eager" />
          </div>
        </section>
        <section className="gulkand-content section">
          <div className="container">
            {content.sections.map((section) => (
              <article key={section.title} className="gulkand-article">
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={`${section.title}-${index}`}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </section>
        <section className="gulkand-faq section" aria-label="FAQ">
          <div className="container">
            <h2>FAQ</h2>
            <div className="gulkand-faq-list">
              {content.faq.map((item) => (
                <article key={item.question} className="gulkand-faq-item">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
            <p className="gulkand-cta">{content.cta}</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default GulkandLanding;
