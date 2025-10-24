import type { IClient } from '~features/clients/types/Client.ts';

export type AuthRequestData = Pick<IClient, 'username' | 'password'>;

export interface IAuthResponseData {
  token: string;
}
