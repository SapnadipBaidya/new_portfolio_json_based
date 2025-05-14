import { Box } from '@mui/material';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = ({ mode, setMode }) => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Header mode={mode} setMode={setMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </Box>
  );
};

export default Home;