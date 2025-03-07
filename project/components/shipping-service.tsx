import React from "react";

const ShippingServices: React.FC = () => {
  // Lista de serviços de envio
  const services = [
    { name: "FedEx", logo: "project\public\image\R.png" },
    { name: "DHL", logo: "/logos/dhl.png" },
    { name: "Express", logo: "/logos/express.png" },
    { name: "DPD", logo: "/logos/dpd.png" },
    { name: "ARS", logo: "/logos/ars.png" },
    { name: "Aramex", logo: "/logos/aramex.png" },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Serviços de Envio
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Trabalhamos com as melhores transportadoras para garantir entregas rápidas e seguras.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src={service.logo}
                  alt={service.name}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShippingServices;