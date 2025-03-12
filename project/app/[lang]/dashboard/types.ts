export interface AddressData {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string; // Usado internamente
}

export interface UserAddressProps {
  address: {
    street: string;
    city: string;
    state: string; 
    country: string;
    zipCode: string; // Nome usado pelo componente UserAddress
  };
  suiteNumber: string;
  username: string;
  title: string;
}

export interface UserData {
  name: string;
  email: string;
  suite: string;
  address: AddressData;
  stats: {
    products: number;
    packages: number;
    services: number;
    shipments: number;
  };
}