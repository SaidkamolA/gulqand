import { SITE, getSiteUrl } from '../config/site';
import { getSeoForLang } from '../config/seoDefaults';

function withProductUrls(products, siteUrl, lang) {
  return products.map((p) => ({
    ...p,
    id: `${siteUrl}/${lang}#product-${p.slug}`,
  }));
}

/**
 * Returns JSON-LD @graph: Organization, LocalBusiness, Product[], BreadcrumbList
 */
export function buildStructuredData(lang) {
  const siteUrl = getSiteUrl();
  const seo = getSeoForLang(lang);
  const products = withProductUrls(seo.products, siteUrl, lang);

  const organization = {
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: SITE.name,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    email: SITE.email,
    telephone: SITE.phoneE164,
    sameAs: SITE.sameAs,
  };

  const localBusiness = {
    '@type': 'GroceryStore',
    '@id': `${siteUrl}/#localbusiness`,
    parentOrganization: { '@id': `${siteUrl}/#organization` },
    name: SITE.name,
    image: [`${siteUrl}/logo.png`],
    url: siteUrl,
    telephone: SITE.phoneE164,
    email: SITE.email,
    priceRange: SITE.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.addressLocality,
      addressRegion: SITE.address.addressRegion,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    openingHoursSpecification: SITE.openingHoursSpecification.map((spec) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: spec.dayOfWeek,
      opens: spec.opens,
      closes: spec.closes,
    })),
    areaServed: {
      '@type': 'City',
      name: 'Tashkent',
    },
    makesOffer: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Grocery and sweets delivery',
        description: 'Delivery of sweets, fruit, and groceries in Tashkent region',
      },
    },
  };

  const productNodes = products.map((p) => ({
    '@type': 'Product',
    '@id': p.id,
    name: p.name,
    url: p.id,
    image: `${siteUrl}/logo.png`,
    brand: { '@type': 'Brand', name: SITE.name },
    offers: {
      '@type': 'Offer',
      url: `${siteUrl}/${lang}#products`,
      availability: 'https://schema.org/InStock',
      priceCurrency: 'UZS',
    },
  }));

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    '@id': `${siteUrl}/#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: SITE.name,
        item: `${siteUrl}/${lang}`,
      },
    ],
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, localBusiness, breadcrumb, ...productNodes],
  };
}
