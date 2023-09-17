// AppRoutes.js
import { Routes, Route } from 'react-router-dom';
import Section from '../PageSettings/Section';

import About from '../../pages/AboutPage';
import Catalog from '../../pages/CatalogPage';
import Contact from '../../pages/ContactPage';
import HomePage from '../../pages/HomePage';
import RegulationsPage from '../../pages/RegulationsPage';
import PageNotFound from '../../pages/PageNotFound';
import Offer from '../../pages/OfferPage';
import Developers from '../../pages/category/DevelopersPage';
import IntermediariesPage from '../../pages/category/IntermediariesPage';
import InvestmentsPage from '../../pages/category/InvestmentsPage';

export default function AppRoutes() {
  return (
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
          <Section noPadding>
            <Catalog />
          </Section>
        }
      />
      <Route
        path="/category/developers"
        element={
          <Section>
            <Developers />
          </Section>
        }
      />
      <Route
        path="/category/intermediaries"
        element={
          <Section>
            <IntermediariesPage />
          </Section>
        }
      />
      <Route
        path="/category/investments"
        element={
          <Section>
            <InvestmentsPage />
          </Section>
        }
      />

      <Route
        path="/offer"
        element={
          <Section>
            <Offer />
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
  );
}
