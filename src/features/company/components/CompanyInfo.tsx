import CompanyFooter from './CompanyFooter.tsx';
import CompanyHeader from './CompanyHeader.tsx';

import ProfileCardList from '~features/company/components/profile-card-list/ProfileCardList.tsx';
import { EMPLOYEES } from '~mock/index.ts';

const CompanyInfo = () => {
  return (
    <>
      <CompanyHeader />
      <ProfileCardList items={EMPLOYEES} />
      <CompanyFooter />
    </>
  );
};

export default CompanyInfo;
