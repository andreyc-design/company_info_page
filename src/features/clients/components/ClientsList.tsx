import { type FC, useRef, useState } from 'react';

import ClientDialog from '~features/clients/components/ClientDialog.tsx';
import type { IClient } from '~features/clients/types/Client.ts';

type ClientsListProps = {
  clients: IClient[];
};

const ClientsList: FC<ClientsListProps> = ({ clients }) => {
  const selectedClient = useRef<IClient | undefined>(undefined);
  const [isOpenClientDialog, setIsOpenClientDialog] = useState<boolean>(false);

  const openClientDialog = (client: IClient) => {
    selectedClient.current = client;
    setIsOpenClientDialog(true);
  };

  const closeClientDialog = () => {
    setIsOpenClientDialog(false);
  };

  return (
    <div>
      {isOpenClientDialog ? (
        <ClientDialog client={selectedClient.current!} close={closeClientDialog} />
      ) : (
        <></>
      )}
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <button onClick={() => openClientDialog(client)}>{client.firstName}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsList;
