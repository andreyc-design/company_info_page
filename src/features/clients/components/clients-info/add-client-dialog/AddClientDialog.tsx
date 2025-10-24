import type { FC } from 'react';

import AddClient from '~features/clients/components/clients-info/add-client-dialog/add-client/AddClient.tsx';
import AppDialog from '~shared/components/dialog/AppDialog.tsx';

type AddClientDialogProps = {
  close: () => void;
};

const addClientDialog: FC<AddClientDialogProps> = ({ close }) => {
  return (
    <AppDialog disableBackdropClose close={close}>
      <AddClient />
    </AppDialog>
  );
};

export default addClientDialog;
