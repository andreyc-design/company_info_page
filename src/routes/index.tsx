import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '~constants/routes';
import ClientDetailsPage from '~pages/client-details';
import ClientsPage from '~pages/clients';
import CompanyPage from '~pages/company';
import HomePage from '~pages/home';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.COMPANY} element={<CompanyPage />} />;
      <Route path={ROUTES.HOME} element={<HomePage />} />;
      <Route path={ROUTES.CLIENTS.HOME} element={<ClientsPage />} />
      <Route path={ROUTES.CLIENTS.DETAILS} element={<ClientDetailsPage />} />
    </Routes>
  );
};

export const ClientRoutes = () => {
  return (
    <>
      <Route path={ROUTES.CLIENTS.HOME} element={<ClientsPage />} />
      <Route path={ROUTES.CLIENTS.DETAILS} element={<ClientDetailsPage />} />
    </>
  );
};
