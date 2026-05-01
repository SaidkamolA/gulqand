/**
 * Writes public/sitemap.xml and public/robots.txt before production build.
 * Set REACT_APP_SITE_URL on Vercel (e.g. https://gulqand.uz).
 */
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const base = (process.env.REACT_APP_SITE_URL || 'https://gulqand.uz').replace(/\/$/, '');
const routes = [
  { path: '/', priority: '1.0' },
  { path: '/uz', priority: '0.9' },
  { path: '/ru', priority: '0.9' },
  { path: '/en', priority: '0.9' },
];
const lastmod = new Date().toISOString().split('T')[0];

function buildUrl(loc, priority) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(({ path: routePath, priority }) => {
    const loc = routePath === '/' ? `${base}/` : `${base}${routePath}`;
    return buildUrl(loc, priority);
  })
  .join('\n')}
</urlset>
`;

const publicDir = path.join(__dirname, '..', 'public');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf8');

const robots = `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots, 'utf8');
console.log(`[generate-seo-files] Wrote sitemap + robots for ${base}`);
