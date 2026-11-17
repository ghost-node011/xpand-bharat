import { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import Analytics from './components/Analytics';
import WhatsAppButton from './components/WhatsAppButton';

import AppRoutes from './AppRoutes';

function App() {
  const [loading, setLoading] = useState(
    () => !sessionStorage.getItem('xb-loaded')
  );

  const handleComplete = useCallback(() => {
    sessionStorage.setItem('xb-loaded', '1');
    setLoading(false);
  }, []);

  return (
      <Router>
        <ScrollToTop />
        <Analytics />
        <Routes>

          {/* ── Public routes (with Navbar/Footer) ── */}
          <Route
            path="*"
            element={
              <>
                {loading && <Preloader onComplete={handleComplete} />}
                <div className="site-root" style={{
                  minHeight: '100vh', display: 'flex', flexDirection: 'column',
                  opacity: loading ? 0 : 1,
                  transition: 'opacity 0.4s ease 0.1s',
                }}>
                  <Navbar />
                  <main style={{ flex: 1 }}>
                    <AppRoutes />
                  </main>
                  <Footer />
                  <WhatsAppButton />
                </div>
              </>
            }
          />
        </Routes>
      </Router>
  );
}

export default App;
