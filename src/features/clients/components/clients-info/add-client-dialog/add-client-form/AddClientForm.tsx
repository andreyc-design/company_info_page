import { ErrorMessage, Form, Formik, type FormikHelpers } from 'formik';
import type { FC } from 'react';

import styles from '~features/clients/components/clients-info/add-client-dialog/add-client/AddClient.module.scss';
import {
  ADD_CLIENT_INPUT_CONFIGS,
  ADD_CLIENT_VALIDATION_SCHEMA,
} from '~features/clients/constants';
import type { AddClientFormData } from '~features/clients/types/AddClientFormData.ts';
import AppFormField from '~shared/components/form-field/AppFormField.tsx';
import AppSubmitBtn from '~shared/components/submit-btn/AppSubmitBtn.tsx';

type AddClientFormProps = {
  handleSubmit: (
    clientFormData: AddClientFormData,
    options: FormikHelpers<AddClientFormData>
  ) => Promise<void>;
};

/**
 * AddClientForm is a functional component responsible for rendering and managing
 * the form for adding a new client. It uses Formik for form handling and validation.
 *
 * @type {FC<AddClientFormProps>}
 *
 * @param {AddClientFormProps} AddClientFormProps - The props passed to the AddClientForm component.
 * @property {function} handleSubmit - Callback function executed when the form is submitted successfully.
 *
 * The form is initialized with `clientFormInitialData` containing default values for the
 * form fields, and it uses a validation schema defined in `ADD_CLIENT_VALIDATION_SCHEMA`.
 *
 * Renders:
 * - Form fields based on `ADD_CLIENT_INPUT_CONFIGS`, each associated with a name, placeholder, type, and maxLength.
 * - Error messages for invalid or incomplete fields using Formik's `ErrorMessage`.
 * - A submit button that is disabled while the form is invalid, unmodified, or currently submitting.
 */
const AddClientForm: FC<AddClientFormProps> = ({ handleSubmit }: AddClientFormProps) => {
  const clientFormInitialData: AddClientFormData = {
    username: '',
    email: '',
    password: '',
    phone: '',
  };

  return (
    <Formik
      initialValues={clientFormInitialData}
      validationSchema={ADD_CLIENT_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleBlur, isValid, dirty, isSubmitting }) => (
        <Form className={styles.clientForm}>
          {ADD_CLIENT_INPUT_CONFIGS.map(({ type, name, placeholder, maxLength }) => {
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

          <div className={styles.clientForm__submitBtn}>
            <AppSubmitBtn name={'Submit'} disabled={!isValid || !dirty || isSubmitting} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddClientForm;
