import { createContext } from 'react';

import type { IAddClientFormData } from '~features/clients/types/Client.ts';

export const ClientMethodsContext = createContext<{
  add: (formClientData: IAddClientFormData) => void;
  remove: (clientId: number) => void;
} | null>(null);
