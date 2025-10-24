import AppointmentsList from '~features/appointments/components/appointments-info/appointments-list/AppointmentsList.tsx';
import { APPOINTMENTS } from '~features/appointments/constants';

const Appointments = () => {
  return (
    <div>
      <h2>Your Appointments</h2>

      <AppointmentsList appointments={APPOINTMENTS} />
    </div>
  );
};

export default Appointments;
