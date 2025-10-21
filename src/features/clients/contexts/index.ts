import { createContext } from 'react';

import type { AddClientFormData } from '~features/clients/types/AddClientFormData.ts';

export const ClientMethodsContext = createContext<{
  add: (formClientData: AddClientFormData) => Promise<void>;
} | null>(null);
