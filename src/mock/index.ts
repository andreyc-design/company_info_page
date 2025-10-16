import type { IClient } from '~features/clients/types/Client.ts';
import type { IEmployee } from '~features/company/types/Employee.ts';

export const EMPLOYEES: IEmployee[] = [
  { firstName: 'Andrew', lastName: 'Chuprina', age: 23, id: 1 },
  { firstName: 'Test', lastName: 'Testtest', age: 28, id: 2 },
  { firstName: 'Test1', lastName: 'Test2', age: 40, id: 3 },
];

export const CLIENTS: IClient[] = [
  {
    id: 1,
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
    balance: 1250.75,
  },
  {
    id: 2,
    firstName: 'Brian',
    lastName: 'Smith',
    email: 'brian.smith@example.com',
    balance: 4820.0,
  },
  {
    id: 3,
    firstName: 'Carla',
    lastName: 'Martinez',
    email: 'carla.martinez@example.com',
    balance: 310.4,
  },
  {
    id: 4,
    firstName: 'David',
    lastName: 'Nguyen',
    email: 'david.nguyen@example.com',
    balance: 9875.6,
  },
];
