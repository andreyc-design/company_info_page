import REGEXP from '~constants/regexp';
import { type ValidatorError, ValidatorErrorType } from '~shared/types/ValidorError.ts';

export type ValidatorFn<T = string> = (value: T) => ValidatorError | null;

export class Validator {
  static required: ValidatorFn = (value: string) => {
    if (!value) return { type: ValidatorErrorType.Required };
    return null;
  };

  static minLength = (minLength: number): ValidatorFn => {
    return (value: string) => {
      if (value && value.trim() && value.length < minLength) {
        return {
          minLength,
          type: ValidatorErrorType.MinLength,
          currentLength: value.length,
        };
      }

      return null;
    };
  };

  static maxLength = (maxLength: number): ValidatorFn => {
    return (value: string) => {
      if (value && value.trim() && value.length > maxLength) {
        return {
          maxLength,
          type: ValidatorErrorType.MaxLength,
          currentLength: value.length,
        };
      }

      return null;
    };
  };

  static notEmptyString: ValidatorFn = (value: string) => {
    if (value && !value?.trim()) return { type: ValidatorErrorType.NotEmptyString };
    return null;
  };

  static email: ValidatorFn = (value: string) => {
    if (value && !REGEXP.email.test(value)) {
      return { type: ValidatorErrorType.Email };
    }

    return null;
  };
}
