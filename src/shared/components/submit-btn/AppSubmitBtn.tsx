import cn from 'classnames';
import type { FC } from 'react';

type AppSubmitBtnProps = {
  disabled?: boolean;
  name: string;
};

const AppSubmitBtn: FC<AppSubmitBtnProps> = ({ name, disabled = false }) => {
  return (
    <button className={cn('appBtn', 'appBtn_dark')} type="submit" disabled={disabled}>
      {name}
    </button>
  );
};

export default AppSubmitBtn;
