export interface UserInfo {
  address: Address;
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  phone: string;
}

export interface Address {
  geolocation: Geolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

export type AddressWithoutGeo = {
  city: string;
  street: string;
  number: number;
  zipcode: string;
};

export interface Geolocation {
  lat: string;
  long: string;
}

export interface Name {
  firstname: string;
  lastname: string;
}

export type UseUser = {
  userInfo: UserInfo;
  loading: boolean;
  error: boolean;
  isSubmitting: boolean;
  isSubmitSuccess: boolean;
  updateUserInfo: () => void;
  fetchUserDetail: (id: number) => void;
  setUserInfo: (data: AddressWithoutGeo) => void;
};
