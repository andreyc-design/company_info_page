export const ROUTES = {
  HOME: '/',
  CLIENTS: {
    HOME: `/clients`,
    DETAILS: `/clients/:id`,

    buildClientDetails: (id: number) => `/clients/${id}`,
  },
  COMPANY: `/company`,
} as const;
