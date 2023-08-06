export type AddressT = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

export type CompanyT = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type UserT = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressT;
  phone: string;
  website: string;
  company: CompanyT;
};

export type UserReducerT = {
  users: UserT[];
  searchText: string;
};
