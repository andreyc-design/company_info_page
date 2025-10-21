import cn from 'classnames';
import { type FC } from 'react';

import styles from '~features/clients/components/clients-info/client-list/ClientsList.module.scss';
import type { IClientWithActive } from '~features/clients/types/Client.ts';

type ClientsListProps = {
  clients: IClientWithActive[];
  onClickClientHandler: (client: IClientWithActive) => void;
};

const ClientsList: FC<ClientsListProps> = ({ clients, onClickClientHandler }) => {
  return (
    <div>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <button onClick={() => onClickClientHandler(client)}>
              <span
                className={cn(styles.clientItem__name, {
                  [styles.clientItem__name_active]: client.isActive,
                })}
              >
                {client.username}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsList;
