export interface Profile {
  id?: string;
  userName: string;
  name: string;
  firstName: string;
  password: string;
  confirmPassword: string;
  admin: boolean;
  addressName: string;
  street: string;
  house:string;
  bus?:string;
  postal:string;
  city: string;
  country: string;
}
