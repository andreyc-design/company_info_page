import { useCallback, useRef, useState } from 'react';

import ClientsList from '~features/clients/components/ClientsList.tsx';
import AddClientDialog from '~features/clients/components/add-client-dialog/AddClientDialog.tsx';
import ClientDialog from '~features/clients/components/client-dialog/ClientDialog.tsx';
import { ClientMethodsContext } from '~features/clients/contexts';
import type { IAddClientFormData, IClient } from '~features/clients/types/Client.ts';
import { CLIENTS } from '~mock/index.ts';

const ClientsInfo = () => {
  const selectedClient = useRef<IClient | undefined>(undefined);

  const [clients, setClients] = useState<IClient[]>(CLIENTS);
  const [isOpenAddClientDialog, setIsOpenAddClientDialog] = useState(false);
  const [isOpenClientDialog, setIsOpenClientDialog] = useState<boolean>(false);

  const addClient = (formClientData: IAddClientFormData) => {
    const lastIdx = clients.length - 1;
    const id = clients[lastIdx].id + 1;

    const { password: _, ...clientData } = formClientData;

    const newClient: IClient = { ...clientData, id, balance: 0 };

    setClients([...clients, newClient]);
    closeAddClientDialog();
  };

  const removeClient = (clientId: number) => {
    const newClients = clients.filter((client) => client.id !== clientId);
    setClients(newClients);

    closeClientDialog();
  };

  const openAddClientDialog = () => {
    setIsOpenAddClientDialog(true);
  };

  const closeAddClientDialog = useCallback(() => {
    setIsOpenAddClientDialog(false);
  }, []);

  const openClientDialog = useCallback((client: IClient) => {
    selectedClient.current = client;
    setIsOpenClientDialog(true);
  }, []);

  const closeClientDialog = useCallback(() => {
    setIsOpenClientDialog(false);
  }, []);

  return (
    <ClientMethodsContext value={{ add: addClient, remove: removeClient }}>
      <div>
        <h1>Clients List</h1>

        {isOpenAddClientDialog ? <AddClientDialog close={closeAddClientDialog} /> : <></>}

        {isOpenClientDialog ? (
          <ClientDialog client={selectedClient.current!} close={closeClientDialog} />
        ) : (
          <></>
        )}

        <ClientsList clients={clients} onClickClientHandler={openClientDialog} />
        <button onClick={openAddClientDialog}>Add Client</button>
      </div>
    </ClientMethodsContext>
  );
};

export default ClientsInfo;
