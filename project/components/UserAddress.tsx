import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

interface AddressProps {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface UserAddressProps {
  address: AddressProps;
  suiteNumber: string;
  username: string;
  title: string;
}

export const UserAddress: React.FC<UserAddressProps> = ({ 
  address, 
  suiteNumber, 
  username,
  title
}) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-gray-500 mb-1">Destinatário</div>
            <div className="flex items-center space-x-2 font-medium">
              <span>{username} - Suite {suiteNumber}</span>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Endereço</div>
            <div className="font-medium">{address.street}</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="text-sm text-gray-500 mb-1">Cidade</div>
            <div className="font-medium">{address.city}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Estado</div>
            <div className="font-medium">{address.state}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">CEP</div>
            <div className="font-medium">{address.zipCode}</div>
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-500 mb-1">País</div>
          <div className="font-medium">{address.country}</div>
        </div>
        
        <div className="flex items-start space-x-3 bg-blue-50 p-3 rounded-lg text-blue-700 text-sm">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <div>
            <p className="font-medium"><span className="font-bold">Informação importante</span></p>
            <p className="mt-1">Sempre inclua o número da sua suite ao final do endereço ou no campo &apos;Endereço 2&apos;.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
