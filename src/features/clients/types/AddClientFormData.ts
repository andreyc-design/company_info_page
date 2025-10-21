import type { IClient } from '~features/clients/types/Client.ts';

export type AddClientFormData = Omit<IClient, 'id'>;
