export interface IClientCommonData {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IClient extends IClientCommonData {
  id: number;
  balance: number;
}

export interface IAddClientFormData extends IClientCommonData {
  password: string;
}
