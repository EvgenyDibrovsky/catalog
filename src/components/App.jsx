import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';
import Container from './Container';
import About from '../pages/AboutPage';
import Contact from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import TermsUsePage from '../pages/TermsUsePage';
import PageNotFound from '../pages/PageNotFound';
import Loading from './Loader';

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    // имитация асинхронной загрузки данных
    setTimeout(() => setLoading(false), 2000);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/* <Router> */}
      <div>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Section>
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms-use-page" element={<TermsUsePage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Container>
        </Section>
        <Footer />
      </div>
    </Router>
  );
};
