import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AppRoutes from 'components/AppRoutes/AppRoutes';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Loading from './Base/Loader';
import { HelmetProvider } from 'react-helmet-async';
// import { useLocation } from 'react-router-dom';

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

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
    setTimeout(() => setLoading(false), 500);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  if (loading) {
    return <Loading />;
  }

  return (
    <HelmetProvider>
      <Router basename={process.env.PUBLIC_URL}>
        {/* <Router> */}
        {/* <ScrollToTop /> */}
        <div>
          <Header theme={theme} toggleTheme={toggleTheme} />
          <AppRoutes />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};
