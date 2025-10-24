import { createApi } from '@reduxjs/toolkit/query/react';

import { API_PATHS } from '~constants/api-paths';
import type { AuthRequestData, IAuthResponseData } from '~features/auth/types/AuthData.ts';
import { BASE_QUERY } from '~shared/api/rootApi.ts';
import { HttpMethods } from '~shared/types/HttpMethods.ts';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: BASE_QUERY,
  endpoints: (builder) => ({
    login: builder.mutation<IAuthResponseData, AuthRequestData>({
      query: (authData) => ({
        url: API_PATHS.AUTH.LOGIN,
        method: HttpMethods.Post,
        body: authData,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
