import { object, string } from 'yup';

import type { IAddClientInputConfig } from '~features/clients/types/AddClientInputConfig.ts';
import type { IClient } from '~features/clients/types/Client.ts';
import type { IClientFilterConfig } from '~features/clients/types/ClientFilterConfig.ts';
import { ClientFilterType } from '~features/clients/types/ClientFilterType.ts';

export const MAX_NAME_LENGTH = 40;
export const MIN_NAME_LENGTH = 4;

export const MIN_PASS_LENGTH = 8;

export const MIN_PHONE_LENGTH = 14;
export const MAX_PHONE_LENGTH = 14;

export const ADD_CLIENT_INPUT_CONFIGS: IAddClientInputConfig[] = [
  {
    type: 'text',
    name: 'username',
    placeholder: 'Username',
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
  {
    type: 'tel',
    name: 'phone',
    placeholder: 'Phone',
    maxLength: MAX_PHONE_LENGTH,
  },
];

export const ADD_CLIENT_VALIDATION_SCHEMA = object<IClient>().shape({
  username: string()
    .min(MIN_NAME_LENGTH, 'Too Short!')
    .max(MAX_NAME_LENGTH, 'Too Long!')
    .required('Required'),
  email: string().email('Invalid email').required('Required'),
  password: string().min(MIN_PASS_LENGTH, 'Too Short!').required('Required'),
  phone: string()
    .min(MIN_PHONE_LENGTH, 'Too Short!')
    .max(MAX_PHONE_LENGTH, 'Too Long!')
    .required('Required'),
});

export const CLIENT_FILTER_CONFIGS: IClientFilterConfig[] = [
  { name: 'All', type: ClientFilterType.All },
  { name: 'Active', type: ClientFilterType.Active },
  { name: 'Inactive', type: ClientFilterType.Inactive },
];
