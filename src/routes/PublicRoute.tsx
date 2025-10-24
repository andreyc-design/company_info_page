import { type FC, type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { ROUTES } from '~constants/routes';
import { useAuth } from '~shared/hooks/useAuth.ts';

interface PublicRouteProps {
  children: ReactNode;
  declineRedirectPath?: string;
}

/**
 * PublicRoute is a functional component that restricts authenticated users
 * from accessing certain routes and redirects them to a specified path.
 *
 * This component checks the authentication status using a token. If the user
 * is authenticated (i.e., a valid token exists), they are redirected to the
 * defined `declineRedirectPath`. Otherwise, the `children` elements are rendered,
 * allowing non-authenticated users to access the public route.
 *
 * @param {PublicRouteProps} props - The props for the PublicRoute component.
 * @param {React.ReactNode} props.children - The components or elements to render if the user is not authenticated.
 * @param {string} [props.declineRedirectPath=ROUTES.CLIENTS.HOME] - The path to redirect to if the user is authenticated.
 */
const PublicRoute: FC<PublicRouteProps> = ({
  children,
  declineRedirectPath = ROUTES.CLIENTS.HOME,
}: PublicRouteProps) => {
  const { token } = useAuth();

  if (token) {
    return <Navigate to={declineRedirectPath} replace />;
  }

  return children;
};

export default PublicRoute;
