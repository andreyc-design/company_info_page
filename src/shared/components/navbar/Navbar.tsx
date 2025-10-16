import { Link } from 'react-router';

import { ROUTES } from '~constants/routes';
import styles from '~shared/components/navbar/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to={ROUTES.CLIENTS} className={styles.navbar__link}>
        Clients
      </Link>
      <Link to={ROUTES.COMPANY} className={styles.navbar__link}>
        COMPANY
      </Link>
      <Link to={ROUTES.HOME} className={styles.navbar__link}>
        HOME
      </Link>
    </nav>
  );
};

export default Navbar;
