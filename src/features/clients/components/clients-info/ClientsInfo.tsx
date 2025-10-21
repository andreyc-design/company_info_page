import { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { ROUTES } from '~constants/routes';
import { useCreateClientMutation, useGetClientsQuery } from '~features/clients/api/clientsApi.ts';
import AddClientDialog from '~features/clients/components/clients-info/add-client-dialog/AddClientDialog.tsx';
import ClientFilter from '~features/clients/components/clients-info/client-filter/ClientFilter.tsx';
import ClientsList from '~features/clients/components/clients-info/client-list/ClientsList.tsx';
import ClientSearch from '~features/clients/components/clients-info/client-search/ClientSearch.tsx';
import { CLIENT_FILTER_CONFIGS } from '~features/clients/constants';
import { ClientMethodsContext } from '~features/clients/contexts';
import { getAllClients, getFilteredClients } from '~features/clients/store/clientsSlice.ts';
import type { AddClientFormData } from '~features/clients/types/AddClientFormData.ts';
import type { IClient, IClientWithActive } from '~features/clients/types/Client.ts';
import { ClientFilterType } from '~features/clients/types/ClientFilterType.ts';
import type { RootState } from '~shared/store';

const ClientsInfo = () => {
  const [isOpenAddClientDialog, setIsOpenAddClientDialog] = useState(false);
  const navigate = useNavigate();

  const [filter, setFilter] = useState<ClientFilterType>(ClientFilterType.All);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredClients = useSelector((state: RootState) =>
    getFilteredClients(state, filter, searchQuery)
  );
  const allClients = useSelector(getAllClients);

  const [createClient] = useCreateClientMutation();

  const { isLoading: isClientsLoading, isError: isClientsError } = useGetClientsQuery();

  const filterConfigs = CLIENT_FILTER_CONFIGS;

  const addClient = useCallback(
    async (formClientData: AddClientFormData) => {
      const lastIdx = allClients.length - 1;
      const id = allClients[lastIdx].id + 1;

      const newClient: IClient = { ...formClientData, id };

      try {
        await createClient(newClient);
        setIsOpenAddClientDialog(false);
      } catch (err) {
        console.log('Failed to create client', err);
      }
    },
    [createClient, allClients]
  );

  const openAddClientDialog = useCallback(() => {
    setIsOpenAddClientDialog(true);
  }, []);

  const closeAddClientDialog = useCallback(() => {
    setIsOpenAddClientDialog(false);
  }, []);

  const navToClient = useCallback(
    (client: IClientWithActive) => {
      navigate(ROUTES.CLIENTS.buildClientDetails(client.id));
    },
    [navigate]
  );

  const listTemplate = useMemo(() => {
    if (!isClientsLoading && !isClientsError) {
      return (
        <>
          {filteredClients.length ? (
            <ClientsList clients={filteredClients} onClickClientHandler={navToClient} />
          ) : (
            <h3>Client's list is empty</h3>
          )}

          <button onClick={openAddClientDialog}>Add Client</button>
        </>
      );
    }

    if (isClientsError) {
      return <h3>Something went wrong</h3>;
    }

    if (isClientsLoading) {
      return <h3>Loading...</h3>;
    }

    return <></>;
  }, [isClientsError, isClientsLoading, filteredClients, navToClient, openAddClientDialog]);

  return (
    <ClientMethodsContext value={{ add: addClient }}>
      <>
        <h1>Clients List</h1>

        {allClients?.length ? (
          <div style={{ width: '500px', display: 'flex', flexDirection: 'column', rowGap: '16px' }}>
            <ClientSearch searchQuery={searchQuery} handleOnChange={setSearchQuery} />
            <ClientFilter
              filterConfigs={filterConfigs}
              handleOnClick={setFilter}
              activeFilter={filter}
            />
          </div>
        ) : (
          <></>
        )}

        {isOpenAddClientDialog ? <AddClientDialog close={closeAddClientDialog} /> : <></>}

        {listTemplate}
      </>
    </ClientMethodsContext>
  );
};

export default ClientsInfo;
