import { type FC } from 'react';

import type { IClient } from '~features/clients/types/Client.ts';

type ClientsListProps = {
  clients: IClient[];
  onClickClientHandler: (client: IClient) => void;
};

const ClientsList: FC<ClientsListProps> = ({ clients, onClickClientHandler }) => {
  return (
    <div>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <button onClick={() => onClickClientHandler(client)}>{client.firstName}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsList;
