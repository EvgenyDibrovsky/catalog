import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Section from './PageSettings/Section';
import About from '../pages/AboutPage';
import Catalog from '../pages/CatalogPage';
import Contact from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import RegulationsPage from '../pages/RegulationsPage';
import PageNotFound from '../pages/PageNotFound';
import Loading from './Base/Loader';
import { HelmetProvider } from 'react-helmet-async';

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
    <HelmetProvider>
      {/* <Router basename={process.env.PUBLIC_URL}> */}
      <Router>
        <div>
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route
              path="/"
              element={
                <Section noPadding>
                  <HomePage />
                </Section>
              }
            />
            <Route
              path="/about"
              element={
                <Section>
                  <About />
                </Section>
              }
            />
            <Route
              path="/catalog"
              element={
                <Section>
                  <Catalog />
                </Section>
              }
            />
            <Route
              path="/contact"
              element={
                <Section>
                  <Contact />
                </Section>
              }
            />
            <Route
              path="/terms-use-page"
              element={
                <Section>
                  <RegulationsPage />
                </Section>
              }
            />
            <Route
              path="*"
              element={
                <Section>
                  <PageNotFound />
                </Section>
              }
            />
          </Routes>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};
