import cn from 'classnames';
import { type ChangeEvent, type FC, useContext, useMemo, useState } from 'react';

import styles from '~features/clients/components/add-client-dialog/add-client-form/AddClientForm.module.scss';
import { ADD_CLIENT_INPUT_CONFIGS, ADD_CLIENT_INPUT_VALIDATORS } from '~features/clients/constants';
import { ClientMethodsContext } from '~features/clients/contexts';
import type { IAddClientFormData } from '~features/clients/types/Client.ts';
import AppInput from '~shared/components/input/AppInput.tsx';
import { type ValidatorFn } from '~shared/helpers/validator';
import { type ValidatorError, ValidatorErrorType } from '~shared/types/ValidorError.ts';
import typedEntries from '~utils/typedEntries.ts';

const AddClientForm: FC = () => {
  const [clientFormData, setClientFormData] = useState<IAddClientFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof IAddClientFormData, string | null>>
  >({});

  const isEmptyForm = useMemo(() => {
    return !Object.values(clientFormData).some((v) => !!v);
  }, [clientFormData]);

  const hasError = useMemo(() => {
    return Object.values(formErrors).some((v) => !!v);
  }, [formErrors]);

  const clientMethodsContext = useContext(ClientMethodsContext)!;

  const inputConfigs = [...ADD_CLIENT_INPUT_CONFIGS];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClientFormData((prev) => ({ ...prev, [name]: value }));

    if (formErrors[name as keyof IAddClientFormData]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleValidate = (
    name: keyof IAddClientFormData,
    validators: ValidatorFn[],
    value: string
  ): ValidatorError | null => {
    let error: ValidatorError | null = null;

    for (const validatorFn of validators) {
      const validatorResult = validatorFn(value);

      if (!validatorResult) continue;

      error = validatorResult;

      break;
    }

    if (!error) return null;

    setFormErrors((prev) => ({ ...prev, [name]: getErrorText(error, name) }));
    return error;
  };

  const getErrorText = (error: ValidatorError, name: keyof IAddClientFormData) => {
    switch (error.type) {
      case ValidatorErrorType.Required: {
        return `${name} is required.`;
      }
      case ValidatorErrorType.NotEmptyString: {
        return `${name} is empty.`;
      }
      case ValidatorErrorType.MinLength: {
        return `${name} should be at least ${error.minLength} characters.`;
      }
      case ValidatorErrorType.MaxLength: {
        return `${name} should be greater than ${error.maxLength} characters`;
      }
      case ValidatorErrorType.Email: {
        return `It should be a valid email address.`;
      }
    }
  };

  const handleSubmit = () => {
    let isError = false;

    typedEntries(clientFormData).forEach(([key, value]) => {
      const validators = ADD_CLIENT_INPUT_VALIDATORS[key];
      const error = handleValidate(key as keyof IAddClientFormData, validators, value);

      if (error) {
        isError = true;
      }
    });

    if (isError) return;

    clientMethodsContext.add(clientFormData);
  };

  return (
    <>
      <h2>Add new Client !</h2>
      <form className={styles.clientForm} action={handleSubmit}>
        {inputConfigs.map(({ type, name, placeholder, maxLength }) => {
          return (
            <div key={name}>
              <AppInput
                type={type}
                name={name}
                placeholder={placeholder}
                value={clientFormData[name]}
                onChangeHandler={(e) => handleChange(e)}
                maxlength={maxLength}
              />

              {formErrors[name] ? <p>{formErrors[name]}</p> : <></>}
            </div>
          );
        })}

        <button
          className={cn('appBtn', 'appBtn--dark', styles.clientForm__submitBtn)}
          type="submit"
          disabled={hasError || isEmptyForm}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddClientForm;
