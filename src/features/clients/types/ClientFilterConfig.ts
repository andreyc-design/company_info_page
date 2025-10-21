import type { ClientFilterType } from '~features/clients/types/ClientFilterType.ts';

export interface IClientFilterConfig {
  type: ClientFilterType;
  name: string;
}
