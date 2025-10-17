import type { FC } from 'react';

import ClientItem from '~features/clients/components/client-dialog/client-item/ClientItem.tsx';
import type { IClient } from '~features/clients/types/Client.ts';
import AppDialog from '~shared/components/dialog/AppDialog.tsx';

type ClientDialogProps = {
  client: IClient;
  close: () => void;
};

const ClientDialog: FC<ClientDialogProps> = ({ client, close }) => {
  return (
    <AppDialog close={close}>
      <ClientItem client={client} />
    </AppDialog>
  );
};

export default ClientDialog;
