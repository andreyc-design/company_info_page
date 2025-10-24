export const ROUTES = {
  HOME: '/',
  CLIENTS: {
    HOME: `/clients`,
    DETAILS: `/:id`,

    buildClientDetails: (id: number) => `/clients/${id}`,
  },
  AUTH: '/auth',
  APPOINTMENTS: {
    HOME: '/appointments',
    DETAILS: `/:id`,

    buildAppointmentDetails: (id: number) => `/appointments/${id}`,
  },
} as const;
