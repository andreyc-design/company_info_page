export interface IClient {
  username: string;
  email: string;
  password: string;
  phone: string;
  id: number;
}

export interface IClientWithActive extends IClient {
  isActive: boolean;
}
