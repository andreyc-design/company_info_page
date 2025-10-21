import type { AddClientFormData } from '~features/clients/types/AddClientFormData.ts';
import type { SupportedInputType } from '~shared/types/SupportedInputType.ts';

export interface IAddClientInputConfig {
  name: keyof AddClientFormData;
  placeholder: string;
  type: SupportedInputType;
  maxLength?: number;
}
