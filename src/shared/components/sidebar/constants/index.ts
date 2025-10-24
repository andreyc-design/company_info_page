import { ROUTES } from '~constants/routes';
import type { ISidebarItem } from '~shared/components/sidebar/types/SidebarItem.ts';

export const SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: 'Clients',
    routerLink: ROUTES.CLIENTS.HOME,
  },
  {
    label: 'Appointments',
    routerLink: ROUTES.APPOINTMENTS.HOME,
  },
];
