import { configureStore } from '@reduxjs/toolkit';

import { authApi } from '~features/auth/api/authApi.ts';
import { clientsApi } from '~features/clients/api/clientsApi.ts';
import { clientsSlice } from '~features/clients/store/clientsSlice.ts';

export const store = configureStore({
  reducer: {
    clients: clientsSlice.reducer,
    [clientsApi.reducerPath]: clientsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(clientsApi.middleware, authApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
