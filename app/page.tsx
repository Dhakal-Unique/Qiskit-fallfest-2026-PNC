import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyJoin from './components/WhyJoin';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import FAQ from './components/FAQ';
import Partners from './components/Partners';
import Sponsors from './components/Sponsors';
import Register from './components/Register';
import Contact from './components/Contact';
import Venue from './components/Venue';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyJoin />
      <Schedule />
      <Speakers />
      <FAQ />
      <Partners />
      <Sponsors />
      <Register />
      <Contact />
      <Venue />
      <Footer />
    </>
  );
}


