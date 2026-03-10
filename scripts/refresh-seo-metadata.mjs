import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const sourceSitemapPath = new URL('../public/sitemap.xml', import.meta.url);
const outputSitemapPath = new URL('../dist/sitemap.xml', import.meta.url);
const today = new Date().toISOString().slice(0, 10);

if (!existsSync(outputSitemapPath)) {
  console.error('dist/sitemap.xml not found. Run `vite build` before refreshing SEO metadata.');
  process.exit(1);
}

const sitemapContent = readFileSync(sourceSitemapPath, 'utf8');
const updatedContent = sitemapContent.replace(
  /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g,
  `<lastmod>${today}</lastmod>`,
);

writeFileSync(outputSitemapPath, updatedContent);
console.log(`Generated dist/sitemap.xml with lastmod set to ${today}`);
