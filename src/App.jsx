import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Mission from './pages/Mission';
import History from './pages/History';
import Team from './pages/Team';
import Services from './pages/Services';
import ServicePage from './pages/ServicePage';
import Financial from './pages/Financial';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import JoinUs from './pages/JoinUs';
import NotFound from './pages/NotFound';
import { SERVICES } from './data/site';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/history" element={<History />} />
          <Route path="/team" element={<Team />} />
          <Route path="/service" element={<Services />} />
          {SERVICES.map((s) => (
            <Route key={s.slug} path={`/${s.slug}`} element={<ServicePage slug={s.slug} />} />
          ))}
          <Route path="/financial" element={<Financial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/joinus" element={<JoinUs />} />
          {/* legacy URLs kept so old links and search results still work */}
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/abulance" element={<Navigate to="/ambulance" replace />} />
          <Route path="/ourprogram" element={<Navigate to="/service" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
