import { Container } from '@mui/material';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </Container>
  );
}

export default App;
