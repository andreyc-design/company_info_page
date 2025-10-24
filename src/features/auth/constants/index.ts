import { object, string } from 'yup';

import type { AuthRequestData } from '~features/auth/types/AuthData.ts';
import type { IAuthInputConfig } from '~features/auth/types/AuthInputConfig.ts';

export const AUTH_INPUT_CONFIGS: IAuthInputConfig[] = [
  {
    type: 'text',
    name: 'username',
    placeholder: 'Username',
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Password',
  },
];

export const AUTH_VALIDATION_SCHEMA = object<AuthRequestData>().shape({
  username: string().required('Required'),
  password: string().required('Required'),
});
