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
import HousesPage from '../../pages/category/HousesPage';
import ApartmentsPage from '../../pages/category/ApartmentsPage';
import PlotsPage from '../../pages/category/PlotsPage';

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
      >
        <Route
          path="developers"
          element={
            <Section>
              <Developers />
            </Section>
          }
        />

        <Route
          path="intermediaries"
          element={
            <Section>
              <IntermediariesPage />
            </Section>
          }
        />
        <Route
          path="investments"
          element={
            <Section>
              <InvestmentsPage />
            </Section>
          }
        />
        <Route
          path="houses"
          element={
            <Section>
              <HousesPage />
            </Section>
          }
        />
        <Route
          path="apartments"
          element={
            <Section>
              <ApartmentsPage />
            </Section>
          }
        />
        <Route
          path="plots"
          element={
            <Section>
              <PlotsPage />
            </Section>
          }
        />
      </Route>

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
        path="/regulations"
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
