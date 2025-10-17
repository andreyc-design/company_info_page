import { type FieldInputProps, useField } from 'formik';
import type { FC, RefObject } from 'react';

import styles from '~shared/components/input/AppInput.module.scss';
import type { SupportedInputType } from '~shared/types/SupportedInputType.ts';

type AppInputCustomProps = {
  type: SupportedInputType;
  placeholder?: string;
  ref?: RefObject<HTMLInputElement>;
  maxlength?: number;
};

type AppInputProps = AppInputCustomProps & FieldInputProps<string>;

const AppInput: FC<AppInputProps> = ({ type, ref, maxlength, placeholder, ...props }) => {
  const [field] = useField(props);

  return (
    <input
      className={styles.appInput}
      type={type}
      ref={ref}
      maxLength={maxlength}
      placeholder={placeholder}
      {...field}
    />
  );
};

export default AppInput;
