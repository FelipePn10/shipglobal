import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AddressProps {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string; // Corrigido de zipCode para postalCode
}

interface UserAddressProps {
  address: AddressProps;
  suiteNumber: string;
  username: string;
  title: string;
}

export const UserAddress: React.FC<UserAddressProps> = ({ address, suiteNumber, username, title }) => {
  return (
    <Card className="shadow-sm border-blue-100">
      <CardHeader className="bg-blue-50">
        <CardTitle className="text-blue-800">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-2 text-gray-700">
        <p>
          {username}, Suite {suiteNumber}
        </p>
        <p>{address.street}</p>
        <p>
          {address.city}, {address.state}, {address.country} {address.postalCode}
        </p>
      </CardContent>
    </Card>
  );
};