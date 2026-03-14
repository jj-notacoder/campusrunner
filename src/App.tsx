import './campus-runner.css';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import AppPreview from './components/AppPreview';
import AudienceTabs from './components/AudienceTabs';
import Stats from './components/Stats';
import Footer from './components/Footer';
import { I18nProvider } from './i18n/I18nContext';

function App() {
  return (
    <I18nProvider>
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <Problem />
      <HowItWorks />
      <Services />
      <AudienceTabs />
      <Stats />
      <AppPreview />
      <Footer />
    </I18nProvider>
  );
}

export default App;
