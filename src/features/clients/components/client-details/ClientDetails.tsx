import cn from 'classnames';
import { type FC, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import { ROUTES } from '~constants/routes';
import {
  useLazyGetClientByIdQuery,
  useRemoveClientMutation,
  useSetIsActiveClientMutation,
} from '~features/clients/api/clientsApi.ts';
import styles from '~features/clients/components/client-details/ClientDetails.module.scss';
import { getClient } from '~features/clients/store/clientsSlice.ts';
import type { IClientWithActive } from '~features/clients/types/Client.ts';
import AppToggle from '~shared/components/toggle/AppToggle.tsx';
import type { RootState } from '~shared/store';

const ClientDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const clientId = +id!;

  const existedClient = useSelector((state: RootState) => getClient(state, clientId));
  const [fetchClient, { data: fetchedClient, isLoading: isLoadingClient, isError: isErrorClient }] =
    useLazyGetClientByIdQuery();
  const [removeClient, { isLoading: isLoadingRemoveClient }] = useRemoveClientMutation();

  const [setIsActiveClient] = useSetIsActiveClientMutation();
  const [client, setClient] = useState<IClientWithActive>();

  const [isCheckedToggle, setIsCheckedToggle] = useState<boolean>();
  const [isDisabledToggle, setIsDisabledToggle] = useState<boolean>();

  const navigate = useNavigate();

  useEffect(() => {
    if (existedClient || isNaN(clientId)) return;

    fetchClient(clientId);
  }, [existedClient, clientId, fetchClient]);

  useEffect(() => {
    if (!existedClient && !fetchedClient) return;

    setClient(existedClient || fetchedClient);
  }, [existedClient, fetchedClient]);

  useEffect(() => {
    if (!client) return;
    setIsCheckedToggle(client.isActive);
  }, [client]);

  const toggleActive = useCallback(
    async (isActive: boolean) => {
      setIsDisabledToggle(true);

      if (existedClient) {
        await setIsActiveClient({ client: client!, isActive });
      } else {
        try {
          const newClient = await setIsActiveClient({ client: client!, isActive }).unwrap();
          setClient(newClient);
        } catch (err) {
          console.error('Failed to update client:', err);
        }
      }

      setIsDisabledToggle(false);
    },
    [setIsActiveClient, client, existedClient]
  );

  const handleRemove = useCallback(async () => {
    try {
      await removeClient(client!);
      setClient(undefined);
      navigate(ROUTES.CLIENTS.HOME);
    } catch (err) {
      console.error('Failed to remove client:', err);
    }
  }, [removeClient, navigate, client]);

  const handleGoBack = () => {
    navigate(ROUTES.CLIENTS.HOME);
  };

  const template = () => {
    if (isLoadingClient || isLoadingRemoveClient) {
      return <h1>Loading...</h1>;
    }

    if (!client && isErrorClient) {
      return <h1>This client doesn't exist!</h1>;
    }

    if (isErrorClient) {
      return <h1>Something went wrong</h1>;
    }

    if (client) {
      return (
        <>
          <h1>{client.username}</h1>

          <p>
            Email: <b>{client.email}</b>
          </p>

          <p>
            phone: <b>{client.phone}</b>
          </p>

          <div>
            <p>
              {client.isActive ? (
                <span style={{ color: 'green' }}>Active</span>
              ) : (
                <span style={{ color: 'red' }}>Inactive</span>
              )}
            </p>
            <AppToggle
              checked={isCheckedToggle!}
              onChange={toggleActive}
              disabled={!!isDisabledToggle}
            />
          </div>

          <div className={styles.clientDetails__actionsContainer}>
            <button
              className={cn('appBtn', 'appBtn_red', styles.clientDetails__removeBtn)}
              onClick={handleRemove}
            >
              Remove
            </button>

            <button
              className={cn('appBtn', 'appBtn_dark', styles.clientDetails__removeBtn)}
              disabled
            >
              Edit
            </button>
          </div>
        </>
      );
    }
  };

  return (
    <div className={styles.clientDetails}>
      <button className={styles.clientDetails__backBtn} onClick={handleGoBack}>
        Go Back
      </button>
      {template()}
    </div>
  );
};

export default ClientDetails;
