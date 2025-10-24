import { Link } from 'react-router';

import { ROUTES } from '~constants/routes';
import styles from '~features/company/components/company-header/CompanyHeader.module.scss';

const CompanyHeader = () => {
  return (
    <header className={styles.companyHeader}>
      <nav>
        <Link to={ROUTES.AUTH} className={styles.companyHeader__link}>
          Login
        </Link>
      </nav>
    </header>
  );
};

export default CompanyHeader;
