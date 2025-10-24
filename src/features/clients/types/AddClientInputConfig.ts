import type { AddClientFormData } from '~features/clients/types/AddClientFormData.ts';
import type { IInputConfig } from '~shared/types/InputConfig.ts';

export interface IAddClientInputConfig extends IInputConfig {
  name: keyof AddClientFormData;
}
