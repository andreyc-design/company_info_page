import ClientsList from '~features/clients/components/ClientsList.tsx';
import { CLIENTS } from '~mock/index.ts';

const ClientsInfo = () => {
  return (
    <div>
      <h1>Clients List</h1>
      <ClientsList clients={CLIENTS} />
    </div>
  );
};

export default ClientsInfo;
