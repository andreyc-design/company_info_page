export const enum ValidatorErrorType {
  MinLength = 'minLength',
  MaxLength = 'maxLength',
  Required = 'required',
  NotEmptyString = 'notEmptyString',
  Email = 'email',
}

export type ValidatorError =
  | IValidatorMinLengthError
  | IValidatorMaxLengthError
  | IValidatorRequiredError
  | IValidatorNotEmptyStringError
  | IValidatorEmailError;

export interface IValidatorMinLengthError {
  type: ValidatorErrorType.MinLength;
  currentLength: number;
  minLength: number;
}

export interface IValidatorMaxLengthError {
  type: ValidatorErrorType.MaxLength;
  currentLength: number;
  maxLength: number;
}

export interface IValidatorRequiredError {
  type: ValidatorErrorType.Required;
}

export interface IValidatorNotEmptyStringError {
  type: ValidatorErrorType.NotEmptyString;
}

export interface IValidatorEmailError {
  type: ValidatorErrorType.Email;
}
