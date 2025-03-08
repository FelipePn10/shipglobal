declare module 'shippo' {
  interface Rate {
    service: string;
    amount: string;
    currency: string;
  }

  interface Shipment {
    rates: Rate[];
  }

  interface ShippoClient {
    shipment: {
      create: (data: {
        address_from: any;
        address_to: any;
        parcels: any[];
        async: boolean;
      }) => Promise<Shipment>;
    };
  }

  function shippo(apiKey: string): ShippoClient;
  export default shippo;
}