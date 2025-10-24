import { type FormikHelpers } from 'formik';
import { type FC, useContext } from 'react';

import AddClientForm from '~features/clients/components/clients-info/add-client-dialog/add-client-form/AddClientForm.tsx';
import { ClientMethodsContext } from '~features/clients/contexts';
import type { AddClientFormData } from '~features/clients/types/AddClientFormData.ts';

const AddClient: FC = () => {
  const clientMethodsContext = useContext(ClientMethodsContext)!;

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

      <AddClientForm handleSubmit={handleSubmit} />
    </>
  );
};

export default AddClient;
