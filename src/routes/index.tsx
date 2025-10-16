import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '~constants/routes';
import ClientsPage from '~pages/clients';
import CompanyPage from '~pages/company';
import HomePage from '~pages/home';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.COMPANY} element={<CompanyPage />} />;
      <Route path={ROUTES.CLIENTS} element={<ClientsPage />} />;
      <Route path={ROUTES.HOME} element={<HomePage />} />;
    </Routes>
  );
};
