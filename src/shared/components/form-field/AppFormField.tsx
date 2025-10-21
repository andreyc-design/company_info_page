import { type FieldInputProps, useField } from 'formik';
import type { FC, RefObject } from 'react';

import AppInput from '~shared/components/input/AppInput.tsx';
import type { SupportedInputType } from '~shared/types/SupportedInputType.ts';

type AppInputCustomProps = {
  type: SupportedInputType;
  placeholder?: string;
  ref?: RefObject<HTMLInputElement>;
  maxlength?: number;
};

type AppInputProps = AppInputCustomProps & FieldInputProps<string>;

const AppFormField: FC<AppInputProps> = ({ type, maxlength, placeholder, ref, ...props }) => {
  const [field] = useField(props);

  return (
    <AppInput type={type} maxlength={maxlength} placeholder={placeholder} ref={ref} {...field} />
  );
};

export default AppFormField;
