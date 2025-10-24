import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '~constants/routes';
import AppointmentDetails from '~features/appointments/components/appointment-details/AppointmentDetails.tsx';
import AppointmentsPage from '~pages/appointments/AppointmentsPage.tsx';
import AuthPage from '~pages/auth/AuthPage.tsx';
import ClientDetailsPage from '~pages/client-details';
import ClientsPage from '~pages/clients';
import CompanyPage from '~pages/company';
import ProtectedRoute from '~routes/ProtectedRoute.tsx';
import PublicRoute from '~routes/PublicRoute.tsx';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={
          <PublicRoute>
            <CompanyPage />
          </PublicRoute>
        }
      />
      ;
      <Route
        path={ROUTES.AUTH}
        element={
          <PublicRoute>
            <AuthPage />
          </PublicRoute>
        }
      />
      ;
      <Route
        path={`${ROUTES.CLIENTS.HOME}/*`}
        element={
          <ProtectedRoute>
            <ClientRoutes />
          </ProtectedRoute>
        }
      />
      <Route
        path={`${ROUTES.APPOINTMENTS.HOME}/*`}
        element={
          <ProtectedRoute>
            <AppointmentRoutes />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export const ClientRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<ClientsPage />} />
      <Route path={ROUTES.CLIENTS.DETAILS} element={<ClientDetailsPage />} />
    </Routes>
  );
};

export const AppointmentRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<AppointmentsPage />} />
      <Route path={ROUTES.APPOINTMENTS.DETAILS} element={<AppointmentDetails />} />
    </Routes>
  );
};
