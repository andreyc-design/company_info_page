import type { AuthRequestData } from '~features/auth/types/AuthData.ts';
import type { IInputConfig } from '~shared/types/InputConfig.ts';

export interface IAuthInputConfig extends IInputConfig {
  name: keyof AuthRequestData;
}
