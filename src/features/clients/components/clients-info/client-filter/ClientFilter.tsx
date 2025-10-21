import cn from 'classnames';
import type { FC } from 'react';

import styles from '~features/clients/components/clients-info/client-filter/ClientFilter.module.scss';
import type { IClientFilterConfig } from '~features/clients/types/ClientFilterConfig.ts';
import type { ClientFilterType } from '~features/clients/types/ClientFilterType.ts';

type ClientsFilterProps = {
  filterConfigs: IClientFilterConfig[];
  handleOnClick: (filer: ClientFilterType) => void;
  activeFilter: ClientFilterType;
};

const ClientFilter: FC<ClientsFilterProps> = ({ filterConfigs, activeFilter, handleOnClick }) => {
  return (
    <div className={styles.filterBlock}>
      {filterConfigs.map((config) => {
        return (
          <button
            key={config.type}
            className={cn(styles.filterBtn, {
              [styles.filterBtn_active]: activeFilter === config.type,
            })}
            onClick={() => handleOnClick(config.type)}
          >
            {config.name}
          </button>
        );
      })}
    </div>
  );
};

export default ClientFilter;
