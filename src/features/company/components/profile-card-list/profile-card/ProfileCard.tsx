import React from 'react';

import styles from '~features/company/components/profile-card-list/profile-card/ProfileCard.module.scss';
import type { IEmployee } from '~features/company/types/Employee.ts';

type ProfileCardProps = {
  item: IEmployee;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ item }) => {
  return (
    <div className={styles.card}>
      <p>
        First Name: <b>{item.firstName}</b>
      </p>
      <p>
        Last Name: <b>{item.lastName}</b>
      </p>
      <p>
        Age: <b>{item.age}</b>
      </p>
    </div>
  );
};

export default ProfileCard;
