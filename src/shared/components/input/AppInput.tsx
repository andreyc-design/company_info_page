import type { ChangeEvent, FC, RefObject } from 'react';

import styles from '~shared/components/input/AppInput.module.scss';
import type { SupportedInputType } from '~shared/types/SupportedInputType.ts';

type AppInputProps = {
  type: SupportedInputType;
  name: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  ref?: RefObject<HTMLInputElement>;
  maxlength?: number;
  onBlurHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const AppInput: FC<AppInputProps> = ({
  type,
  name,
  value,
  onChangeHandler,
  ref,
  maxlength,
  placeholder,
  onBlurHandler,
}) => {
  return (
    <input
      className={styles.appInput}
      type={type}
      value={value}
      ref={ref}
      name={name}
      maxLength={maxlength}
      placeholder={placeholder}
      onChange={onChangeHandler}
      onBlur={onBlurHandler}
    />
  );
};

export default AppInput;
