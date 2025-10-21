import { createSlice } from '@reduxjs/toolkit';

import { clientsApi } from '~features/clients/api/clientsApi.ts';
import type { IClientWithActive } from '~features/clients/types/Client.ts';
import { ClientFilterType } from '~features/clients/types/ClientFilterType.ts';

interface IClientsState {
  clients: IClientWithActive[];
}

const initialState: IClientsState = {
  clients: [],
};

export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {},
  selectors: {
    getClient: (state: IClientsState, clientId: number) => {
      return state.clients.find((client) => client.id === clientId)!;
    },
    getAllClients: (state: IClientsState) => {
      return state.clients;
    },
    getFilteredClients: (
      state: IClientsState,
      filterState: ClientFilterType,
      searchQuery?: string
    ) => {
      let filteredClients = state.clients;

      switch (filterState) {
        case ClientFilterType.Active: {
          filteredClients = state.clients.filter((client) => client.isActive);
          break;
        }
        case ClientFilterType.Inactive: {
          filteredClients = state.clients.filter((client) => !client.isActive);
        }
      }

      if (searchQuery && searchQuery.length >= 1) {
        return filteredClients.filter((client) => {
          return client.username.toLowerCase().includes(searchQuery.toLowerCase());
        });
      }

      return filteredClients;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(clientsApi.endpoints.getClients.matchFulfilled, (state, { payload }) => {
      state.clients = payload;
    });

    builder.addMatcher(
      clientsApi.endpoints.setIsActiveClient.matchFulfilled,
      (state, { payload }) => {
        const clientIdx = state.clients.findIndex((client) => client.id === payload.id);

        if (clientIdx === -1) return;

        const client = state.clients[clientIdx];
        client.isActive = payload.isActive;
      }
    );
  },
});

export const { getClient, getAllClients, getFilteredClients } = clientsSlice.selectors;
