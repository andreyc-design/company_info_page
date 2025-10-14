import React from 'react';

import ProfileCard from '~features/company/components/profile-card-list/profile-card/ProfileCard.tsx';
import type { IEmployee } from '~features/company/types/Employee.ts';

type ProfileCardListProps = {
  items: IEmployee[];
};

const ProfileCardList: React.FC<ProfileCardListProps> = ({ items }) => {
  return items.map((item) => {
    return <ProfileCard key={item.id} item={item} />;
  });
};

export default ProfileCardList;
