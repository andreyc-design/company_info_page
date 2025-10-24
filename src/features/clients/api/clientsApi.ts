import { createApi } from '@reduxjs/toolkit/query/react';

import { API_PATHS } from '~constants/api-paths';
import type { IClient, IClientWithActive } from '~features/clients/types/Client.ts';
import { ClientApiTags } from '~features/clients/types/ClientApiTags.ts';
import { BASE_QUERY } from '~shared/api/rootApi.ts';
import { HttpMethods } from '~shared/types/HttpMethods.ts';

export const clientsApi = createApi({
  reducerPath: 'clientsApi',
  baseQuery: BASE_QUERY,
  tagTypes: [ClientApiTags.Clients],
  endpoints: (builder) => ({
    getClients: builder.query<IClientWithActive[], void>({
      query: () => API_PATHS.CLIENTS.LIST,
      transformResponse: (clients: IClientWithActive[]) => {
        return clients.map((client) => ({
          ...client,
          isActive: true,
        }));
      },
      providesTags: [ClientApiTags.Clients],
    }),

    getClientById: builder.query<IClientWithActive, number>({
      query: (clientId) => API_PATHS.CLIENTS.buildItemPath(clientId),
      transformResponse: (client: IClientWithActive) => {
        return {
          ...client,
          isActive: true,
        };
      },
    }),

    setIsActiveClient: builder.mutation<
      IClientWithActive,
      { client: IClientWithActive; isActive: boolean }
    >({
      async queryFn(apiData) {
        await new Promise((res) => setTimeout(res, 1000));
        return { data: { ...apiData.client, isActive: apiData.isActive } };
      },
    }),

    removeClient: builder.mutation<IClientWithActive, IClientWithActive>({
      query: (client) => ({
        url: API_PATHS.CLIENTS.buildItemPath(client.id),
        method: HttpMethods.Delete,
      }),
      transformResponse: (client: IClientWithActive, _, arg) => {
        return {
          ...client,
          isActive: arg.isActive,
        };
      },
      invalidatesTags: [ClientApiTags.Clients],
    }),

    createClient: builder.mutation<IClientWithActive, IClient>({
      query: (newClient) => ({
        url: API_PATHS.CLIENTS.LIST,
        method: HttpMethods.Post,
        body: newClient,
      }),
      transformResponse: (client: IClientWithActive) => {
        return {
          ...client,
          isActive: true,
        };
      },
      invalidatesTags: [ClientApiTags.Clients],
    }),
  }),
});

export const {
  useGetClientsQuery,
  useLazyGetClientByIdQuery,
  useSetIsActiveClientMutation,
  useRemoveClientMutation,
  useCreateClientMutation,
} = clientsApi;
