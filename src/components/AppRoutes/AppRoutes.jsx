// AppRoutes.js
import { Routes, Route, Navigate } from 'react-router-dom'
import About from '../../pages/AboutPage'
import Catalog from '../../pages/CatalogPage'
import Contact from '../../pages/ContactPage'
import HomePage from '../../pages/HomePage'
import RegulationsPage from '../../pages/RegulationsPage'
import PageNotFound from '../../pages/PageNotFound'
import Offer from '../../pages/OfferPage'
import Developers from '../../pages/category/Developers/DevelopersPage'
import IntermediariesPage from '../../pages/category/IntermediariesPage'
import InvestmentsPage from '../../pages/category/InvestmentsPage'
import HousesPage from '../../pages/category/HousesPage'
import ApartmentsPage from '../../pages/category/ApartmentsPage'
import PlotsPage from '../../pages/category/PlotsPage'
// admin
// import AuthAdmin from '../../pages/Auth/Admin/AuthAdminPage'
// import MainAdmin from '../../pages/Auth/Admin/MainAdminPage'
// import HomeAdminPage from '../../pages/Auth/Admin/HomeAdminPage'
// import AdminSettingsPage from '../../pages/Auth/Admin/SettingsPage'
// admin

// user
import ProfilePage from '../../pages/Auth/User/Profile/ProfilePage'
import HomeProfilePage from '../../pages/Auth/User/Profile/HomeProfilePage'
import ControlPanelPage from '../../pages/Auth/User/Profile/ControlPanelPage'
import SettingsProfilePage from '../../pages/Auth/User/Profile/SettingsPage'
import AddPage from '../../pages/Auth/User/Profile/AddPage'
// user
import DevelopersItemPage from '../../pages/category/Developers/DevelopersItemPage'
import DevelopersProjectsPage from '../../pages/category/Developers/DevelopersProjectsPage'
import DevelopersReviewsPage from '../../pages/category/Developers/DevelopersReviewsPage'
import DevelopersAboutPage from '../../pages/category/Developers/DevelopersAboutPage'
//Auth
import AuthUser from '../../pages/Auth/User/AuthUserPage'
import Register from '../../pages/Auth/User/RegistrationPage'
import Login from '../../pages/Auth/User/LoginPage'
import ResetPassword from '../../pages/Auth/User/ResetPasswordPage'

import { PrivateRoute } from '../../components/routes/PrivateRoute'
import { PublicRoute } from '../../components/routes/PublicRoute'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/catalog" element={<Catalog />}>
        <Route path="developers" element={<Developers />} />
        <Route path="developers/:developerId" element={<DevelopersItemPage />}>
          <Route index element={<Navigate to="about" replace />} />
          <Route path="about" element={<DevelopersAboutPage />} />
          <Route path="projects" element={<DevelopersProjectsPage />} />
          <Route path="reviews" element={<DevelopersReviewsPage />} />
        </Route>
        <Route path="intermediaries" element={<IntermediariesPage />} />
        <Route path="investments" element={<InvestmentsPage />} />
        <Route path="houses" element={<HousesPage />} />
        <Route path="apartments" element={<ApartmentsPage />} />
        <Route path="plots" element={<PlotsPage />} />
      </Route>
      <Route path="/offer" element={<Offer />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/regulations" element={<RegulationsPage />} />

      {/* <Route path="/admin" element={<AuthAdmin />} />
      <Route path="/admin/main" element={<MainAdmin />}>
        <Route index element={<HomeAdminPage />} />
        <Route path="settings" element={<AdminSettingsPage />} />
      </Route> */}

      <Route
        path="/user"
        element={
          <PublicRoute restricted={true}>
            <AuthUser />
          </PublicRoute>
        }>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />}>
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
      </Route>

      <Route
        path="/user/profile"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }>
        <Route index element={<HomeProfilePage />} />
        <Route path="control-panel" element={<ControlPanelPage />} />
        <Route path="settings" element={<SettingsProfilePage />} />
        <Route path="add" element={<AddPage />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
