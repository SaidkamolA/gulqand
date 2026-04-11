import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LOCALE_MAP, DEFAULT_LANG, getSiteUrl, SITE } from '../config/site';
import { getSeoForLang } from '../config/seoDefaults';
import { buildStructuredData } from '../utils/structuredData';

const SUPPORTED = ['uz', 'ru', 'en'];

/**
 * Full-page SEO: meta, Open Graph, Twitter, hreflang, canonical, JSON-LD.
 *
 * @param {string} lang - uz | ru | en
 * @param {string} [title] - override page title
 * @param {string} [description] - override meta description
 * @param {string} [keywords] - override keywords
 * @param {string} [image] - absolute or site-relative OG image URL
 * @param {string} [pathSuffix] - e.g. "" for home — canonical = siteUrl/lang + pathSuffix
 * @param {string} [heroPreloadUrl] - resolved asset URL for LCP image preload
 */
function SEO({
  lang = 'uz',
  title,
  description,
  keywords,
  image,
  pathSuffix = '',
  heroPreloadUrl,
}) {
  const safeLang = SUPPORTED.includes(lang) ? lang : 'en';
  const siteUrl = getSiteUrl();
  const seo = getSeoForLang(safeLang);
  const loc = LOCALE_MAP[safeLang];

  const pageTitle = title || seo.title;
  const pageDesc = description || seo.description;
  const pageKeywords = keywords || seo.keywords;
  const ogTitle = title || seo.ogTitle || seo.title;
  const ogDesc = description || seo.ogDescription || seo.description;

  const canonical = `${siteUrl}/${safeLang}${pathSuffix}`;
  const ogImage = image
    ? image.startsWith('http')
      ? image
      : `${siteUrl}${image.startsWith('/') ? '' : '/'}${image}`
    : `${siteUrl}/logo.png`;

  const jsonLd = buildStructuredData(safeLang);

  return (
    <Helmet prioritizeSeoTags>
      <html lang={loc.htmlLang} />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <meta name="keywords" content={pageKeywords} />
      <link rel="canonical" href={canonical} />

      {SUPPORTED.map((l) => (
        <link
          key={l}
          rel="alternate"
          hrefLang={LOCALE_MAP[l].hreflang}
          href={`${siteUrl}/${l}${pathSuffix}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/${DEFAULT_LANG}${pathSuffix}`} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDesc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={loc.ogLocale} />
      {SUPPORTED.filter((l) => l !== safeLang).map((l) => (
        <meta key={l} property="og:locale:alternate" content={LOCALE_MAP[l].ogLocale} />
      ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDesc} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="geo.region" content="UZ-TK" />
      <meta name="geo.placename" content="Tashkent" />

      {/* google-site-verification: см. public/index.html (статичный тег для GSC) */}

      {heroPreloadUrl ? <link rel="preload" as="image" href={heroPreloadUrl} fetchpriority="high" /> : null}

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}

export default SEO;
