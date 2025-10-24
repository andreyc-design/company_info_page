import { format } from 'date-fns';
import { type FC, useMemo } from 'react';
import { Link } from 'react-router';

import { DATE_FORMATS } from '~constants/date-formats';
import { ROUTES } from '~constants/routes';
import styles from '~features/appointments/components/appointments-info/appointments-item/AppointmentsItem.module.scss';
import type { IAppointmentItem } from '~features/appointments/types/AppointmentItem.ts';

type AppointmentsItemProps = {
  appointment: IAppointmentItem;
};

/**
 * AppointmentsItem is a functional component representing a single appointment item.
 * It displays the appointment title and formatted date, and provides a link to the
 * details page for the appointment.
 *
 * @component
 * @param {AppointmentsItemProps} props - The properties passed to the component.
 */
const AppointmentsItem: FC<AppointmentsItemProps> = ({ appointment }: AppointmentsItemProps) => {
  const formatedDate = useMemo(() => {
    return appointment && format(appointment.date, DATE_FORMATS.standard);
  }, [appointment]);

  return (
    <li className={styles.appointmentItem}>
      <Link to={ROUTES.APPOINTMENTS.buildAppointmentDetails(appointment.id)}>
        <span className={styles.appointmentItem__name} style={{ textDecoration: 'none' }}>
          {appointment.title}
        </span>
        <span className={styles.appointmentItem__date}>{formatedDate}</span>
      </Link>
    </li>
  );
};

export default AppointmentsItem;
