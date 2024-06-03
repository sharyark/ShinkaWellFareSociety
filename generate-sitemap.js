import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Required for __dirname with ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://www.shinkawelfare.online/' });

  const writeStream = createWriteStream(path.join(__dirname, 'public', 'sitemap.xml'));
  sitemap.pipe(writeStream);

  const routes = [
    '/',
    '/home',
    '/about',
    '/service',
    '/contact',
    '/donate',
    '/abulance',
    '/cleanliness',
    '/water',
    '/food',
    '/educational',
    '/burial',
    '/team',
    '/financial'
  ];

  routes.forEach(route => {
    sitemap.write({ url: route, changefreq: 'daily', priority: 0.7 });
  });

  sitemap.end();

  try {
    await streamToPromise(sitemap);
    console.log('Sitemap written successfully');
  } catch (error) {
    console.error('Error writing sitemap:', error);
  }
}

generateSitemap();
