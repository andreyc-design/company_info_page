import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { LocalStorageKeys } from '~shared/types/StorageKeys.ts';

const BASE_URL = import.meta.env.VITE_API_FAKESTORE_URL;

export const BASE_QUERY = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem(LocalStorageKeys.Token);
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
