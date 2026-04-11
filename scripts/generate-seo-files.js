/**
 * Writes public/sitemap.xml and public/robots.txt before production build.
 * Set REACT_APP_SITE_URL to your canonical origin (e.g. https://www.gulqand.uz).
 */
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const base = (process.env.REACT_APP_SITE_URL || 'https://www.gulqand.uz').replace(/\/$/, '');
const langs = [
  { code: 'uz', hreflang: 'uz-UZ' },
  { code: 'ru', hreflang: 'ru-RU' },
  { code: 'en', hreflang: 'en-US' },
];
const lastmod = new Date().toISOString().split('T')[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

for (const { code } of langs) {
  xml += `  <url>
    <loc>${base}/${code}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
`;
  for (const alt of langs) {
    xml += `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${base}/${alt.code}" />\n`;
  }
  xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${base}/uz" />
  </url>
`;
}

xml += '</urlset>\n';

const publicDir = path.join(__dirname, '..', 'public');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf8');

const robots = `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots, 'utf8');
console.log(`[generate-seo-files] Wrote sitemap + robots for ${base}`);
