import type { IAppointmentItem } from '~features/appointments/types/AppointmentItem.ts';

export const APPOINTMENTS: IAppointmentItem[] = [
  { id: 1, title: 'Team meeting', date: '2025-10-25', time: '10:00', location: 'Office Room 1' },
  { id: 2, title: 'Doctor visit', date: '2025-10-26', time: '15:30', location: 'City Clinic' },
  { id: 3, title: 'Project demo', date: '2025-10-27', time: '09:00', location: 'Zoom' },
  { id: 4, title: 'Lunch with client', date: '2025-10-28', time: '13:00', location: 'Cafe Milano' },
  { id: 5, title: 'Car service', date: '2025-10-29', time: '11:30', location: 'Auto Center' },
  { id: 6, title: 'Code review', date: '2025-10-30', time: '16:00', location: 'Online' },
  { id: 7, title: 'Marketing sync', date: '2025-10-31', time: '10:30', location: 'Meeting Room 3' },
  { id: 8, title: 'Gym session', date: '2025-11-01', time: '18:00', location: 'FitLife Gym' },
  { id: 9, title: 'Dinner with family', date: '2025-11-02', time: '19:30', location: 'Home' },
  { id: 10, title: 'Weekly planning', date: '2025-11-03', time: '08:30', location: 'Office' },
];
