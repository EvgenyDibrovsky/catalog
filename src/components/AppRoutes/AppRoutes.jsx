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
import Developers from '../../pages/category/Developers/DevelopersPage';
import IntermediariesPage from '../../pages/category/IntermediariesPage';
import InvestmentsPage from '../../pages/category/InvestmentsPage';
import HousesPage from '../../pages/category/HousesPage';
import ApartmentsPage from '../../pages/category/ApartmentsPage';
import PlotsPage from '../../pages/category/PlotsPage';
import Admin from '../../pages/Admin/AuthAdminPage';
import MainAdmin from '../../pages/Admin/MainAdminPage';
import HomeAdminPage from '../../pages/Admin/HomeAdminPage';
import SettingsPage from '../../pages/Admin/SettingsPage';
import DevelopersItemPage from '../../pages/category/Developers/DevelopersItemPage';
import DevelopersProjectsPage from '../../pages/category/Developers/DevelopersProjectsPage';
import DevelopersReviewsPage from '../../pages/category/Developers/DevelopersReviewsPage';
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
        <Route path="developers" element={<Developers />} />
        <Route path="developers/:developerId" element={<DevelopersItemPage />}>
          <Route path="projects" element={<DevelopersProjectsPage />} />
          <Route path="reviews" element={<DevelopersReviewsPage />} />
        </Route>
        <Route path="intermediaries" element={<IntermediariesPage />} />
        <Route path="investments" element={<InvestmentsPage />} />
        <Route path="houses" element={<HousesPage />} />
        <Route path="apartments" element={<ApartmentsPage />} />
        <Route path="plots" element={<PlotsPage />} />
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
      <Route
        path="/admin"
        element={
          <Section noPadding>
            <Admin />
          </Section>
        }
      />
      <Route
        path="/admin/main"
        element={
          <Section noPadding>
            <MainAdmin />
          </Section>
        }
      >
        <Route index element={<HomeAdminPage />} />

        <Route path="settings" element={<SettingsPage />} />
      </Route>
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
