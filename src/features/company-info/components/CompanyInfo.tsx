import CompanyInfoFooter from './CompanyInfoFooter.tsx';
import CompanyInfoHeader from './CompanyInfoHeader.tsx';
import ProfileCard from './profile-card/ProfileCard.tsx';

const CompanyInfo = () => {
  return (
    <>
      <CompanyInfoHeader />
      <ProfileCard />
      <CompanyInfoFooter />
    </>
  );
};

export default CompanyInfo;
