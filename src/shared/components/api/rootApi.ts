import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.VITE_API_FAKESTORE_URL;

export const BASE_QUERY = fetchBaseQuery({
  baseUrl: BASE_URL,
});
