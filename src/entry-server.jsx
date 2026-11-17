// Build-time server entry (not loaded in the browser or by the dev server).
/* eslint-disable react-refresh/only-export-components */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AppRoutes from './AppRoutes';
import { STATIC_PATHS } from './staticPaths';
import { SITE_URL } from './components/Seo';
import { prefetchAll } from './hooks/useContent';

export { STATIC_PATHS, SITE_URL, prefetchAll };

// Build-time render of one route: same markup as the client app, minus the preloader.
export function render(url) {
  const html = renderToString(
    <StaticRouter location={url}>
      <div className="site-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <AppRoutes />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </StaticRouter>
  );
  const helmet = Helmet.renderStatic();
  const head = [helmet.title, helmet.meta, helmet.link, helmet.script].map(h => h.toString()).join('\n');
  return { html, head };
}
