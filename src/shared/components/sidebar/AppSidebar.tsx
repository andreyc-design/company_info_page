import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import { ROUTES } from '~constants/routes';
import styles from '~shared/components/sidebar/AppSidebar.module.scss';
import { SIDEBAR_ITEMS } from '~shared/components/sidebar/constants';
import { useAuth } from '~shared/hooks/useAuth.ts';

/**
 * Represents the application's sidebar component.
 *
 * The `AppSidebar` component renders a vertical navigation menu with links defined
 * in the `SIDEBAR_ITEMS` array. It also includes a logout button that allows users
 * to log out of the application. The sidebar provides structured navigation for the
 * application and integrates logout functionality.
 *
 * Key features:
 * - Displays a list of navigation links using a flexible column layout.
 * - Handles user logout operation by invoking the `useAuth().logout` method and
 *   navigating the user to the authentication route.
 */
export const AppSidebar = () => {
  const { logout, token } = useAuth();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    logout();
    navigate(ROUTES.AUTH, { replace: true });
  };

  useEffect(() => {
    if (!token) {
      navigate(ROUTES.AUTH, { replace: true });
    }
  }, [token, navigate]);

  return (
    <aside className={styles.appSidebar}>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {SIDEBAR_ITEMS.map((it) => (
          <Link key={it.label} to={it.routerLink} className={styles.appSidebar__navLink}>
            {it.label}
          </Link>
        ))}
      </nav>

      <button className={styles.appSidebar__logoutBtn} onClick={handleLogoutClick}>
        Logout
      </button>
    </aside>
  );
};
