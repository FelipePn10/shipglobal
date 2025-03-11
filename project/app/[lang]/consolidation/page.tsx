// "use client";

// import React, { useState, useEffect } from 'react';

// // Tipo para países
// type Country = {
//   id: number;
//   name: string;
//   englishName: string;
//   code: string;
//   flag: string;
//   active: boolean;
// };

// // Tipo para pacotes
// type Package = {
//   id: string;
//   origin: string;
//   status: 'pending' | 'arrived' | 'consolidated' | 'shipped';
//   description: string;
//   weight: number;
//   trackingNumber: string;
//   arrivalDate: string;
// };

// const ConsolidationPage: React.FC = () => {
//   // Estados
//   const [countries, setCountries] = useState<Country[]>([]);
//   const [selectedOrigin, setSelectedOrigin] = useState<string>('');
//   const [packages, setPackages] = useState<Package[]>([]);
//   const [selectedPackages, setSelectedPackages] = useState<string[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [showAnimation, setShowAnimation] = useState<boolean>(false);

//   // Efeito para carregar os países
//   useEffect(() => {
//     // Simulando uma chamada API para carregar os países
//     const loadCountries = () => {
//       const countryList: Country[] = [
//         { id: 1, name: "EUA", englishName: "United States", code: "US", flag: "🇺🇸", active: true },
//         { id: 2, name: "Reino Unido", englishName: "United Kingdom", code: "GB", flag: "🇬🇧", active: true },
//         { id: 3, name: "China", englishName: "China", code: "CN", flag: "🇨🇳", active: true },
//         { id: 4, name: "Japão", englishName: "Japan", code: "JP", flag: "🇯🇵", active: true },
//         { id: 5, name: "Alemanha", englishName: "Germany", code: "DE", flag: "🇩🇪", active: true },
//         { id: 6, name: "Austrália", englishName: "Australia", code: "AU", flag: "🇦🇺", active: true },
//         { id: 7, name: "Canadá", englishName: "Canada", code: "CA", flag: "🇨🇦", active: true },
//         { id: 8, name: "Espanha", englishName: "Spain", code: "ES", flag: "🇪🇸", active: true },
//         { id: 9, name: "França", englishName: "France", code: "FR", flag: "🇫🇷", active: true },
//         { id: 10, name: "Itália", englishName: "Italy", code: "IT", flag: "🇮🇹", active: true },
//         { id: 11, name: "Portugal", englishName: "Portugal", code: "PT", flag: "🇵🇹", active: true },
//         { id: 12, name: "Paraguai", englishName: "Paraguay", code: "PY", flag: "🇵🇾", active: true },
//         { id: 13, name: "Turquia", englishName: "Turkey", code: "TR", flag: "🇹🇷", active: true },
//         { id: 14, name: "Brasil", englishName: "Brazil", code: "BR", flag: "🇧🇷", active: true },
//         { id: 15, name: "Tailândia", englishName: "Thailand", code: "TH", flag: "🇹🇭", active: true },
//         { id: 16, name: "Bélgica", englishName: "Belgium", code: "BE", flag: "🇧🇪", active: true },
//       ];
      
//       setCountries(countryList);
//       setIsLoading(false);
//     };
    
//     // Simular loading de 1 segundo
//     setTimeout(() => {
//       loadCountries();
//     }, 1000);
//   }, []);

//   // Efeito para carregar pacotes quando um país de origem é selecionado
//   useEffect(() => {
//     if (selectedOrigin) {
//       setIsLoading(true);
//       // Simulando uma chamada API para carregar os pacotes do país selecionado
//       setTimeout(() => {
//         const mockPackages: Package[] = [
//           {
//             id: '1',
//             origin: selectedOrigin,
//             status: 'arrived',
//             description: 'Smartphone Samsung Galaxy S22',
//             weight: 0.5,
//             trackingNumber: 'TR12345678',
//             arrivalDate: '2025-03-05',
//           },
//           {
//             id: '2',
//             origin: selectedOrigin,
//             status: 'pending',
//             description: 'Notebook Dell XPS 15',
//             weight: 2.8,
//             trackingNumber: 'TR23456789',
//             arrivalDate: '2025-03-08',
//           },
//           {
//             id: '3',
//             origin: selectedOrigin,
//             status: 'arrived',
//             description: 'Headphones Sony WH-1000XM5',
//             weight: 0.3,
//             trackingNumber: 'TR34567890',
//             arrivalDate: '2025-03-02',
//           },
//           {
//             id: '4',
//             origin: selectedOrigin,
//             status: 'consolidated',
//             description: 'Apple Watch Series 8',
//             weight: 0.2,
//             trackingNumber: 'TR45678901',
//             arrivalDate: '2025-03-01',
//           }
//         ];
        
//         setPackages(mockPackages);
//         setIsLoading(false);
//       }, 800);
//     }
//   }, [selectedOrigin]);

//   // Função para selecionar/deselecionar pacotes
//   const togglePackageSelection = (packageId: string) => {
//     setSelectedPackages(prev => {
//       if (prev.includes(packageId)) {
//         return prev.filter(id => id !== packageId);
//       } else {
//         return [...prev, packageId];
//       }
//     });
//   };

//   // Função para consolidar pacotes
//   const consolidatePackages = () => {
//     if (selectedPackages.length > 0) {
//       setShowAnimation(true);
//       setTimeout(() => {
//         setPackages(prev => 
//           prev.map(pkg => 
//             selectedPackages.includes(pkg.id) 
//               ? { ...pkg, status: 'consolidated' } 
//               : pkg
//           )
//         );
//         setSelectedPackages([]);
//         setShowAnimation(false);
//       }, 2000);
//     }
//   };

//   // Renderização da animação de consolidação
//   const ConsolidationAnimation = () => (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
//         <div className="flex flex-col items-center">
//           <div className="flex space-x-2 mb-4">
//             <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
//             <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//             <div className="w-4 h-4 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
//           </div>
//           <h3 className="text-xl font-bold mb-2">Consolidando seus pacotes</h3>
//           <p className="text-gray-600 text-center">Estamos preparando seus produtos para envio em um único pacote...</p>
          
//           <div className="mt-6 w-full bg-gray-200 rounded-full h-2.5">
//             <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-2.5 rounded-full animate-pulse"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   // Componente do mapa mundial com os países destacados
//   const WorldMap = () => (
//     <div className="relative w-full h-64 md:h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl overflow-hidden mb-8">
//       <div className="absolute inset-0 opacity-20">
//         <svg viewBox="0 0 1000 500" className="w-full h-full">
//           {/* Simplificação do mapa mundial - em uma implementação real seria um SVG completo */}
//           <path d="M250,100 C300,80 350,90 400,100 C450,110 500,130 550,120 C600,110 650,90 700,100 C750,110 800,130 850,120" 
//             fill="none" stroke="#333" strokeWidth="3" className="animate-pulse" />
//           <path d="M200,200 C250,180 300,190 350,200 C400,210 450,230 500,220 C550,210 600,190 650,200 C700,210 750,230 800,220" 
//             fill="none" stroke="#333" strokeWidth="3" className="animate-pulse" />
//           <path d="M300,300 C350,280 400,290 450,300 C500,310 550,330 600,320 C650,310 700,290 750,300" 
//             fill="none" stroke="#333" strokeWidth="3" className="animate-pulse" />
//         </svg>
//       </div>
      
//       {/* Pontos destacados para cada país */}
//       {countries.map((country, idx) => (
//         <div 
//           key={country.id}
//           className={`absolute w-6 h-6 rounded-full flex items-center justify-center cursor-pointer
//                     transition-all duration-300 hover:scale-125 ${selectedOrigin === country.code ? 'bg-purple-600' : 'bg-blue-500'}`}
//           style={{ 
//             top: `${100 + Math.sin(idx * 0.7) * 80}px`, 
//             left: `${150 + idx * 40}px`,
//             animationDelay: `${idx * 0.1}s`
//           }}
//           onClick={() => setSelectedOrigin(country.code)}
//         >
//           <span className="text-xs">{country.flag}</span>
//           {selectedOrigin === country.code && (
//             <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 text-xs rounded shadow">
//               {country.name}
//             </span>
//           )}
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
//       {/* Animação de consolidação */}
//       {showAnimation && <ConsolidationAnimation />}
      
//       {/* Cabeçalho */}
//       <header className="bg-white shadow-md">
//         <div className="container mx-auto py-6 px-4">
//           <div className="flex justify-between items-center">
//             <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400">
//               GlobalShip Express
//             </h1>
//             <div className="flex items-center space-x-4">
//               <button className="bg-white text-blue-600 px-4 py-2 rounded-md border border-blue-600 hover:bg-blue-50 transition">
//                 Minha Conta
//               </button>
//               <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition">
//                 Rastrear Envio
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>
      
//       {/* Conteúdo principal */}
//       <main className="container mx-auto py-8 px-4">
//         <section className="mb-12">
//           <h2 className="text-2xl font-bold mb-6 text-center">
//             Consolide seus pacotes de <span className="text-blue-600">17 países</span> e economize em envios internacionais
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-white p-6 rounded-xl shadow-lg">
//               <h3 className="text-xl font-semibold mb-4 text-blue-800">Como funciona a consolidação?</h3>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
//                     <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-800">Receba em nossos armazéns</h4>
//                     <p className="text-gray-600">Compre em lojas internacionais e envie para nossos armazéns em qualquer um dos 17 países.</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 bg-indigo-100 rounded-full p-2 mr-4">
//                     <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-800">Consolidação inteligente</h4>
//                     <p className="text-gray-600">Combinamos todos os seus pacotes em um único envio, otimizando espaço e reduzindo custos.</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 bg-purple-100 rounded-full p-2 mr-4">
//                     <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-800">Envio internacional</h4>
//                     <p className="text-gray-600">Enviamos seu pacote consolidado para qualquer lugar do mundo com rastreamento completo.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div>
//               <h3 className="text-xl font-semibold mb-4 text-blue-800">Nossos centros de consolidação</h3>
//               <WorldMap />
//             </div>
//           </div>
//         </section>
        
//         {/* Seção de consolidação */}
//         <section className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <div className="p-6 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 text-white">
//             <h2 className="text-xl font-bold">Centro de Consolidação</h2>
//             <p>Gerencie e consolide seus pacotes internacionais em um único envio.</p>
//           </div>
          
//           <div className="p-6">
//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Selecione o país de origem dos seus pacotes:
//               </label>
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
//                 {countries.map(country => (
//                   <button
//                     key={country.id}
//                     className={`flex items-center justify-center p-2 rounded-md transition ${
//                       selectedOrigin === country.code
//                         ? 'bg-blue-600 text-white'
//                         : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
//                     }`}
//                     onClick={() => setSelectedOrigin(country.code)}
//                   >
//                     <span className="mr-2">{country.flag}</span>
//                     <span className="text-sm">{country.name}</span>
//                   </button>
//                 ))}
//               </div>
//             </div>
            
//             {isLoading ? (
//               <div className="flex justify-center py-8">
//                 <div className="flex space-x-2">
//                   <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
//                   <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//                   <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
//                 </div>
//               </div>
//             ) : selectedOrigin ? (
//               <>
//                 <div className="overflow-x-auto mb-4">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Selecionar
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Descrição
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Número de Rastreio
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Peso (kg)
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Status
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Data de Chegada
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {packages.map((pkg) => (
//                         <tr key={pkg.id} className="hover:bg-gray-50">
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <input
//                               type="checkbox"
//                               checked={selectedPackages.includes(pkg.id)}
//                               onChange={() => togglePackageSelection(pkg.id)}
//                               disabled={pkg.status !== 'arrived'}
//                               className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                             />
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="text-sm font-medium text-gray-900">{pkg.description}</div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="text-sm text-gray-500">{pkg.trackingNumber}</div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="text-sm text-gray-500">{pkg.weight}</div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
//                               ${pkg.status === 'arrived' ? 'bg-green-100 text-green-800' : 
//                                 pkg.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
//                                 'bg-blue-100 text-blue-800'}`}>
//                               {pkg.status === 'arrived' ? 'Recebido' : 
//                                pkg.status === 'pending' ? 'Pendente' : 
//                                pkg.status === 'consolidated' ? 'Consolidado' : 'Enviado'}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             {pkg.arrivalDate}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
                
//                 <div className="flex justify-end">
//                   <button
//                     onClick={consolidatePackages}
//                     disabled={selectedPackages.length === 0}
//                     className={`px-4 py-2 rounded-md ${
//                       selectedPackages.length > 0
//                         ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90'
//                         : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                     } transition`}
//                   >
//                     Consolidar {selectedPackages.length > 0 ? `(${selectedPackages.length})` : ''}
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <div className="text-center py-8 text-gray-500">
//                 Selecione um país de origem para ver seus pacotes
//               </div>
//             )}
//           </div>
//         </section>
        
//         {/* Seção de benefícios */}
//         <section className="mt-12 mb-12">
//           <h2 className="text-2xl font-bold mb-8 text-center">
//             Benefícios da Consolidação Internacional
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white p-6 rounded-xl shadow-lg transform transition hover:scale-105">
//               <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
//                 <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                 </svg>
//               </div>
//               <h3 className="text-lg font-semibold mb-2">Economia de até 70% no frete</h3>
//               <p className="text-gray-600">
//                 Pague apenas uma vez pelo frete internacional, reduzindo significativamente o custo total de seus envios.
//               </p>
//             </div>
            
//             <div className="bg-white p-6 rounded-xl shadow-lg transform transition hover:scale-105">
//               <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
//                 <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
//                 </svg>
//               </div>
//               <h3 className="text-lg font-semibold mb-2">Segurança garantida</h3>
//               <p className="text-gray-600">
//                 Todos os pacotes são armazenados em locais seguros e verificados antes da consolidação e envio internacional.
//               </p>
//             </div>
            
//             <div className="bg-white p-6 rounded-xl shadow-lg transform transition hover:scale-105">
//               <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
//                 <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
//                 </svg>
//               </div>
//               <h3 className="text-lg font-semibold mb-2">Rapidez e eficiência</h3>
//               <p className="text-gray-600">
//                 Processo otimizado de consolidação que garante envios rápidos e eficientes para qualquer destino.
//               </p>
//             </div>
//           </div>
//         </section>
        
//         {/* Seção de perguntas frequentes */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-bold mb-8 text-center">
//             Perguntas Frequentes
//           </h2>
          
//           <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//             <div className="divide-y divide-gray-200">
//               <div className="p-6">
//                 <h3 className="text-lg font-medium text-blue-800 mb-2">Quanto tempo leva para consolidar meus pacotes?</h3>
//                 <p className="text-gray-600">
//                   A consolidação ocorre em até 24 horas após a chegada do último pacote em nosso armazém. Após a confirmação de consolidação, o envio internacional é processado em até 48 horas.
//                 </p>
//               </div>
              
//               <div className="p-6">
//                 <h3 className="text-lg font-medium text-blue-800 mb-2">Posso consolidar pacotes de diferentes países?</h3>
//                 <p className="text-gray-600">
//                   Sim! Você pode consolidar pacotes de diferentes países, mas eles precisam estar no mesmo centro de distribuição. Oferecemos a opção de transferência entre centros com custo adicional.
//                 </p>
//               </div>
              
//               <div className="p-6">
//                 <h3 className="text-lg font-medium text-blue-800 mb-2">Como é calculado o valor do frete internacional?</h3>
//                 <p className="text-gray-600">
//                   O cálculo é baseado no peso dimensional e real do pacote consolidado, além do país de destino. Nossa tecnologia otimiza a embalagem para garantir o melhor preço possível.
//                 </p>
//               </div>
              
//               <div className="p-6">
//                 <h3 className="text-lg font-medium text-blue-800 mb-2">Existe um limite de tempo para armazenar meus pacotes?</h3>
//                 <p className="text-gray-600">
//                   Oferecemos 90 dias gratuitos de armazenamento. Após esse período, uma pequena taxa diária será aplicada. Recomendamos a consolidação dentro desse prazo para evitar custos adicionais.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
        
//         {/* Call to action */}
//         <section className="mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
//           <h2 className="text-2xl font-bold mb-4">Pronto para começar a economizar?</h2>
//         <p className="mb-6 max-w-2xl mx-auto">
//             Crie sua conta gratuita agora e receba seu endereço de entrega em 17 países. Consolidação inteligente para economia no frete internacional.
//           </p>
//           <div className="flex justify-center space-x-4">
//             <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition">
//               Saiba Mais
//             </button>
//             <button className="bg-blue-800 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">
//               Criar Conta Grátis
//             </button>
//           </div>
//         </section>
        
//         {/* Depoimentos */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-bold mb-8 text-center">
//             O que nossos clientes dizem
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white p-6 rounded-xl shadow-lg">
//               <div className="flex items-center mb-4">
//                 <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
//                   <span className="text-blue-600 font-bold">ML</span>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold">Mariana Lima</h4>
//                   <div className="flex text-yellow-400">
//                     <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
//                     </svg>
//                     <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
//                     </svg>
//                     <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
//                     </svg>
//                     <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
//                     </svg>
//                     <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//               <p className="text-gray-600 italic">
//                 "Economizei mais de R$ 500 em um único envio consolidando 5 pacotes dos EUA. O processo foi muito simples e o suporte excelente!"
//               </p>
//             </div>
            
//             <div className="bg-white p-6 rounded-xl shadow-lg">
//               <div className="flex items-center mb-4">
//                 <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
//                   <span className="text-purple-600 font-bold">RS</span>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold">Rafael Santos</h4>
//                   <div className="flex text-yellow-400">
//                     <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
//                     </svg>
//                     <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
//                     </svg>
//                     <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
//                     </svg>
//                     <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
//                     </svg>
//                     <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//               <p className="text-gray-600 italic">
//                 "Compro regularmente eletrônicos da China e Japão. A consolidação me permite receber tudo de uma vez, pagando apenas um imposto de importação."
//               </p>
//             </div>
            
//             <div className="bg-white p-6 rounded-xl shadow-lg">
//               <div className="flex items-center mb-4">
//                 <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
//                   <span className="text-green-600 font-bold">CA</span>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold">Carla Almeida</h4>
//                   <div className="flex text-yellow-400">
//                     <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
//                     </svg>
//                     <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
//                     </svg>
//                     <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
//                     </svg>
//                     <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
//                     </svg>
//                     <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//               <p className="text-gray-600 italic">
//                 "O sistema de rastreamento é excelente! Consigo acompanhar cada pacote e depois o envio consolidado em tempo real. Recomendo muito."
//               </p>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default ConsolidationPage;