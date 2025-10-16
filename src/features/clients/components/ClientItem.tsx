import type { FC } from 'react';

import type { IClient } from '~features/clients/types/Client.ts';

type ClientItemProps = {
  client: IClient;
};

const ClientItem: FC<ClientItemProps> = ({ client }) => {
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
    </>
  );
};

export default ClientItem;
