import { type FC, type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { ROUTES } from '~constants/routes';
import { withSidebar } from '~shared/components/hoc/WithSidebar.tsx';
import { useAuth } from '~shared/hooks/useAuth.ts';

interface ProtectedRouteProps {
  children: ReactNode;
  declineRedirectPath?: string;
}

/**
 * A component that acts as a protected route, ensuring that only authenticated users
 * can access its children components. It uses an authentication token to determine
 * access and redirects unauthorized users to a specified route.
 *
 * @type {React.FC<ProtectedRouteProps>}
 *
 * @param {ProtectedRouteProps} props - The props for the `ProtectedRoute` component.
 * @param {React.ReactNode} props.children - The child components to be rendered if the user is authenticated.
 * @param {string} [props.declineRedirectPath=ROUTES.HOME] - The path to redirect unauthenticated users.
 *
 */
const ProtectedRoute: FC<ProtectedRouteProps> = ({
  children,
  declineRedirectPath = ROUTES.HOME,
}: ProtectedRouteProps) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to={declineRedirectPath} replace />;
  }

  return children;
};

/**
 * ProtectedRouteWithSidebar is a higher-order component (HOC) that enhances the functionality
 * of the ProtectedRoute component by integrating it with a sidebar. This composition provides
 * routing capabilities with an additional UI feature of a sidebar, giving a user experience
 * that includes route protection along with sidebar navigation or content functionality.
 *
 * This component is constructed using the `withSidebar` HOC, which wraps the ProtectedRoute
 * component, combining its properties and functionalities into a single component.
 *
 * It ensures that the route is accessible only to authorized users and includes a sidebar
 * for enhanced interface design or navigation.
 *
 * The component is typically used in applications requiring both route protection and a dedicated
 * sidebar layout.
 */
const ProtectedRouteWithSidebar = withSidebar(ProtectedRoute);

export default ProtectedRouteWithSidebar;
