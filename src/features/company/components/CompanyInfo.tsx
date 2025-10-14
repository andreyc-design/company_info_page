import CompanyFooter from './CompanyFooter.tsx';
import CompanyHeader from './CompanyHeader.tsx';

import ProfileCardList from '~features/company/components/profile-card-list/ProfileCardList.tsx';
import { employees } from '~features/company/constans/employees.ts';

const CompanyInfo = () => {
  return (
    <>
      <CompanyHeader />
      <ProfileCardList items={employees} />
      <CompanyFooter />
    </>
  );
};

export default CompanyInfo;
