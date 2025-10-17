import type { IAddClientFormData } from '~features/clients/types/Client.ts';
import type { SupportedInputType } from '~shared/types/SupportedInputType.ts';

export interface IAddClientInputConfig {
  name: keyof IAddClientFormData;
  placeholder: string;
  type: SupportedInputType;
  maxLength?: number;
}
