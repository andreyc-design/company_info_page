import { ErrorMessage, Form, Formik } from 'formik';
import type { FC } from 'react';

import { AUTH_INPUT_CONFIGS, AUTH_VALIDATION_SCHEMA } from '~features/auth/constants';
import type { AuthRequestData } from '~features/auth/types/AuthData.ts';
import AppFormField from '~shared/components/form-field/AppFormField.tsx';
import AppSubmitBtn from '~shared/components/submit-btn/AppSubmitBtn.tsx';

type AuthFormProps = {
  handleSubmit: (authFormData: AuthRequestData) => Promise<void>;
};

const AuthForm: FC<AuthFormProps> = ({ handleSubmit }) => {
  const authInitialData: AuthRequestData = {
    username: '',
    password: '',
  };

  return (
    <Formik
      initialValues={authInitialData}
      validationSchema={AUTH_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleBlur, isValid, dirty, isSubmitting }) => (
        <Form>
          <div style={{ display: 'flex', flexDirection: 'column', rowGap: '16px' }}>
            {AUTH_INPUT_CONFIGS.map(({ type, name, placeholder, maxLength }) => {
              return (
                <div key={name}>
                  <AppFormField
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={values[name]}
                    onChange={handleChange}
                    maxlength={maxLength}
                    onBlur={handleBlur}
                  />

                  <ErrorMessage name={name} />
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: '24px' }}>
            <AppSubmitBtn name={'Submit'} disabled={!isValid || !dirty || isSubmitting} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
