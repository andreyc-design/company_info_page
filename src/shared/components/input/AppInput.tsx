import type { ChangeEvent, FC, RefObject } from 'react';

import styles from '~shared/components/input/AppInput.module.scss';
import type { SupportedInputType } from '~shared/types/SupportedInputType.ts';

type AppInputCustomProps = {
  type: SupportedInputType;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name?: string;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  ref?: RefObject<HTMLInputElement>;
  maxlength?: number;
};

type AppInputProps = AppInputCustomProps;

const AppInput: FC<AppInputProps> = ({ maxlength, ...props }) => {
  return <input className={styles.appInput} maxLength={maxlength} {...props} />;
};

export default AppInput;
