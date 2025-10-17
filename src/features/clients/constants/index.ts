import { object, string } from 'yup';

import type { IAddClientInputConfig } from '~features/clients/types/AddClientInputConfig.ts';
import type { IAddClientFormData } from '~features/clients/types/Client.ts';

export const MAX_NAME_LENGTH = 40;
export const MIN_NAME_LENGTH = 4;

export const MIN_PASS_LENGTH = 8;

export const ADD_CLIENT_INPUT_CONFIGS: IAddClientInputConfig[] = [
  {
    type: 'text',
    name: 'firstName',
    placeholder: 'First Name',
    maxLength: MAX_NAME_LENGTH,
  },
  {
    type: 'text',
    name: 'lastName',
    placeholder: 'Last Name',
    maxLength: MAX_NAME_LENGTH,
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Password',
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'Email',
  },
];

export const ADD_CLIENT_VALIDATION_SCHEMA = object<IAddClientFormData>().shape({
  firstName: string()
    .min(MIN_NAME_LENGTH, 'Too Short!')
    .max(MAX_NAME_LENGTH, 'Too Long!')
    .required('Required'),
  lastName: string()
    .min(MIN_NAME_LENGTH, 'Too Short!')
    .max(MAX_NAME_LENGTH, 'Too Long!')
    .required('Required'),
  email: string().email('Invalid email').required('Required'),
  password: string().min(MIN_PASS_LENGTH, 'Too Short!'),
});
