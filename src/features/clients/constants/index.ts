import type { IAddClientInputConfig } from '~features/clients/types/AddClientInputConfig.ts';
import type { IAddClientFormData } from '~features/clients/types/Client.ts';
import { Validator, type ValidatorFn } from '~shared/helpers/validator';

export const MAX_NAME_LENGTH = 40;
export const MIN_NAME_LENGTH = 4;

export const MAX_PASS_LENGTH = 20;
export const MIN_PASS_LENGTH = 8;

export const ADD_CLIENT_INPUT_VALIDATORS: Record<keyof IAddClientFormData, ValidatorFn[]> = {
  firstName: [
    Validator.required,
    Validator.minLength(MIN_NAME_LENGTH),
    Validator.notEmptyString,
    Validator.maxLength(MAX_NAME_LENGTH),
  ],
  lastName: [
    Validator.minLength(MIN_NAME_LENGTH),
    Validator.notEmptyString,
    Validator.maxLength(MAX_NAME_LENGTH),
    Validator.required,
  ],
  password: [
    Validator.required,
    Validator.minLength(MIN_PASS_LENGTH),
    Validator.notEmptyString,
    Validator.maxLength(MAX_PASS_LENGTH),
  ],
  email: [Validator.required, Validator.email],
};

export const ADD_CLIENT_INPUT_CONFIGS: IAddClientInputConfig[] = [
  {
    type: 'text',
    name: 'firstName',
    placeholder: 'First Name',
    validators: ADD_CLIENT_INPUT_VALIDATORS.firstName,
    maxLength: MAX_NAME_LENGTH,
  },
  {
    type: 'text',
    name: 'lastName',
    placeholder: 'Last Name',
    validators: ADD_CLIENT_INPUT_VALIDATORS.lastName,
    maxLength: MAX_NAME_LENGTH,
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Password',
    validators: ADD_CLIENT_INPUT_VALIDATORS.password,
    maxLength: MAX_PASS_LENGTH,
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'Email',
    validators: ADD_CLIENT_INPUT_VALIDATORS.email,
  },
];
