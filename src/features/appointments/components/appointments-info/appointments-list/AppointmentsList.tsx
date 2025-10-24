import type { FC } from 'react';

import AppointmentsItem from '~features/appointments/components/appointments-info/appointments-item/AppointmentsItem.tsx';
import type { IAppointmentItem } from '~features/appointments/types/AppointmentItem.ts';

type AppointmentsListProps = {
  appointments: IAppointmentItem[];
};

/**
 * Functional Component that renders a list of appointments.
 *
 * @component
 * @param {AppointmentsListProps} props - The prop object.
 * @param {IAppointmentItem[]} props.appointments - An array of appointment objects to be rendered as a list.
 */
const AppointmentsList: FC<AppointmentsListProps> = ({ appointments }: AppointmentsListProps) => {
  return (
    <ul>
      {appointments.map((appointment) => {
        return <AppointmentsItem key={appointment.id} appointment={appointment} />;
      })}
    </ul>
  );
};

export default AppointmentsList;
