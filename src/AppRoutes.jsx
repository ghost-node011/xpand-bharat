import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ForBrands from './pages/ForBrands';
import ForInvestors from './pages/ForInvestors';
import GrowthOpportunities from './pages/GrowthOpportunities';
import OurApproach from './pages/OurApproach';
import Industries from './pages/Industries';
import About from './pages/About';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import Contact from './pages/Contact';
import Brochure from './pages/Brochure';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';
import FranchiseBusinessIndia from './pages/FranchiseBusinessIndia';
import BuyFranchise from './pages/BuyFranchise';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/"                             element={<Home />} />
      <Route path="/for-brands"                   element={<ForBrands />} />
      <Route path="/for-investors"                element={<ForInvestors />} />
      <Route path="/growth-opportunities"         element={<GrowthOpportunities />} />
      <Route path="/our-approach"                 element={<OurApproach />} />
      <Route path="/industries"                   element={<Industries />} />
      <Route path="/about"                        element={<About />} />
      <Route path="/insights"                     element={<Insights />} />
      <Route path="/insights/:slug"               element={<InsightDetail />} />
      <Route path="/contact"                      element={<Contact />} />
      <Route path="/get-started"                  element={<Brochure />} />
      <Route path="/franchise-business-in-india"  element={<FranchiseBusinessIndia />} />
      <Route path="/buy-franchise-in-india"       element={<BuyFranchise />} />
      <Route path="/privacy"                      element={<Privacy />} />
      <Route path="/terms"                        element={<Terms />} />
      <Route path="/disclaimer"                   element={<Disclaimer />} />
    </Routes>
  );
}
