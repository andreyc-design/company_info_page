import type { FC } from 'react';

import AddClientForm from '~features/clients/components/clients-info/add-client-dialog/add-client-form/AddClientForm.tsx';
import AppDialog from '~shared/components/dialog/AppDialog.tsx';

type AddClientDialogProps = {
  close: () => void;
};

const addClientDialog: FC<AddClientDialogProps> = ({ close }) => {
  return (
    <AppDialog disableBackdropClose close={close}>
      <AddClientForm />
    </AppDialog>
  );
};

export default addClientDialog;
