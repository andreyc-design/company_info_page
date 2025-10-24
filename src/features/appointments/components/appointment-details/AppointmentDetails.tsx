import { format } from 'date-fns';
import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';

import { DATE_FORMATS } from '~constants/date-formats';
import { ROUTES } from '~constants/routes';
import { APPOINTMENTS } from '~features/appointments/constants';

/**
 * Renders the details of an appointment based on the provided ID from the URL parameters.
 * If the appointment ID is invalid or not found, navigates back to the appointments home page.
 * The appointment details include title, location, formatted date, and time.
 * Provides a button to navigate back to the appointments home page.
 */
const AppointmentDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const appointmentId = +params.id!;

  const appointment = useMemo(() => {
    return APPOINTMENTS.find((appointment) => appointmentId === appointment.id);
  }, [appointmentId])!;

  useEffect(() => {
    if (isNaN(appointmentId) || !appointment) {
      console.error('Invalid appointment ID');
      navigate(ROUTES.APPOINTMENTS.HOME, { replace: true });
    }
  }, [appointmentId, navigate, appointment]);

  const formatedDate = useMemo(() => {
    return appointment && format(appointment.date, DATE_FORMATS.standard);
  }, [appointment]);

  if (appointment) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 16 }}>
        <h1>{appointment.title}</h1>
        <p>{appointment.location}</p>
        <p>{formatedDate}</p>
        <p>{appointment.time}</p>

        <button
          className={'appBtn appBtn_dark'}
          style={{ width: 200 }}
          onClick={() => navigate(ROUTES.APPOINTMENTS.HOME, { replace: true })}
        >
          Back
        </button>
      </div>
    );
  }
  return <></>;
};

export default AppointmentDetails;
