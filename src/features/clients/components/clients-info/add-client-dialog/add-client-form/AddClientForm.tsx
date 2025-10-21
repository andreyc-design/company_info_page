import cn from 'classnames';
import { ErrorMessage, Form, Formik, type FormikHelpers } from 'formik';
import { type FC, useContext } from 'react';

import styles from '~features/clients/components/clients-info/add-client-dialog/add-client-form/AddClientForm.module.scss';
import {
  ADD_CLIENT_INPUT_CONFIGS,
  ADD_CLIENT_VALIDATION_SCHEMA,
} from '~features/clients/constants';
import { ClientMethodsContext } from '~features/clients/contexts';
import type { AddClientFormData } from '~features/clients/types/AddClientFormData.ts';
import AppFormField from '~shared/components/form-field/AppFormField.tsx';

const AddClientForm: FC = () => {
  const clientFormInitialData: AddClientFormData = {
    username: '',
    email: '',
    password: '',
    phone: '',
  };

  const clientMethodsContext = useContext(ClientMethodsContext)!;
  const inputConfigs = [...ADD_CLIENT_INPUT_CONFIGS];

  const handleSubmit = async (
    clientFormData: AddClientFormData,
    { setSubmitting }: FormikHelpers<AddClientFormData>
  ) => {
    await clientMethodsContext.add(clientFormData);
    setSubmitting(false);
  };

  return (
    <>
      <h2>Add new Client !</h2>

      <Formik
        initialValues={clientFormInitialData}
        validationSchema={ADD_CLIENT_VALIDATION_SCHEMA}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, isValid, dirty, isSubmitting }) => (
          <Form className={styles.clientForm}>
            {inputConfigs.map(({ type, name, placeholder, maxLength }) => {
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

            <button
              className={cn('appBtn', 'appBtn_dark', styles.clientForm__submitBtn)}
              type="submit"
              disabled={!isValid || !dirty || isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddClientForm;
