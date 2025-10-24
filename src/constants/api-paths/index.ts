export const API_PATHS = {
  CLIENTS: {
    LIST: '/users',

    buildItemPath: (id: number | string) => `/users/${id}`,
  },

  AUTH: {
    LOGIN: '/auth/login',
  },
};
