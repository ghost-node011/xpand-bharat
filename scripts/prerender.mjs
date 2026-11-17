// Pre-renders every static route to its own HTML file after `vite build`,
// so search engines get each page's title, canonical, headings and copy
// without running JavaScript. Also writes the SPA fallback shell and sitemap.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render, STATIC_PATHS, SITE_URL, prefetchAll } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

// Load CMS content first so pages render with live copy (falls back to built-in copy).
await Promise.race([prefetchAll(), new Promise(r => setTimeout(r, 15000))]);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

// Tags each page sets for itself through <Seo>; removed from the shared template.
const PAGE_TAGS = [
  /<title>[\s\S]*?<\/title>\s*/,
  /<meta name="description"[^>]*>\s*/,
  /<meta name="keywords"[^>]*>\s*/,
  /<link rel="canonical"[^>]*>\s*/,
  /<meta property="og:(?:site_name|type|title|description|url|image)"[^>]*>\s*/g,
  /<meta name="twitter:[a-z]+"[^>]*>\s*/g,
];
const stripPageTags = html => PAGE_TAGS.reduce((h, re) => h.replace(re, ''), html);

// SPA fallback for routes that are not pre-rendered (e.g. /insights/:slug):
// keep a generic title/description, but never claim the homepage as canonical.
const shell = template
  .replace(/<link rel="canonical"[^>]*>\s*/, '')
  .replace(/<meta property="og:url"[^>]*>\s*/, '');
fs.writeFileSync(path.join(dist, 'app-shell.html'), shell);

const base = stripPageTags(template);
for (const url of STATIC_PATHS) {
  const { html, head } = render(url);
  const page = base
    .replace('</head>', `${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  const file = url === '/' ? 'index.html' : `${url.slice(1)}.html`;
  fs.writeFileSync(path.join(dist, file), page);
  console.log(`prerendered ${url} -> ${file}`);
}

const LOW = ['/privacy', '/terms', '/disclaimer'];
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${STATIC_PATHS.map(u => `  <url>
    <loc>${SITE_URL}${u}</loc>
    <lastmod>${today}</lastmod>
    <priority>${u === '/' ? '1.0' : LOW.includes(u) ? '0.3' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
fs.rmSync(ssrDir, { recursive: true, force: true });
console.log(`sitemap.xml written with ${STATIC_PATHS.length} URLs`);
