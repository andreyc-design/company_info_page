import type { SupportedInputType } from '~shared/types/SupportedInputType.ts';

export interface IInputConfig {
  name: string;
  placeholder: string;
  type: SupportedInputType;
  maxLength?: number;
}
