import cn from 'classnames';
import { type FC, useContext } from 'react';

import styles from '~features/clients/components/client-dialog/client-item/ClientItem.module.scss';
import { ClientMethodsContext } from '~features/clients/contexts';
import type { IClient } from '~features/clients/types/Client.ts';

type ClientItemProps = {
  client: IClient;
};

const ClientItem: FC<ClientItemProps> = ({ client }) => {
  const clientsMethodsContext = useContext(ClientMethodsContext)!;

  return (
    <>
      <h1>{client.firstName}</h1>

      <p>
        Last Name: <b>{client.lastName}</b>
      </p>
      <p>
        Email: <b>{client.email}</b>
      </p>
      <p>
        Balance: <b>{client.balance}</b>
      </p>

      <button
        className={cn('appBtn', 'appBtn--red', styles.clientItem__removeBtn)}
        onClick={() => clientsMethodsContext.remove(client.id)}
      >
        Remove
      </button>
    </>
  );
};

export default ClientItem;
