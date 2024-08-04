import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { ToastContainer } from 'react-toastify';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  useEffect(() => {
    ReactGA.initialize('G-7D2J3T3VXM');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <ToastContainer position="top-right" />
    </>;
};

export default App;
