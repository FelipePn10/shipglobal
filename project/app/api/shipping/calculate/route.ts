import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { fromAddress, toAddress, parcel, shippingMethod } = await req.json();

    const response = await fetch('https://api.goshippo.com/shipments/', {
      method: 'POST',
      headers: {
        'Authorization': 'ShippoToken shippo_test_3b1b0444968d334310ead93a8a09d05489fc1beb',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store', // Desativa o cache
      },
      cache: 'no-store', // Garante que o Next.js não armazene em cache
      body: JSON.stringify({
        address_from: fromAddress,
        address_to: toAddress,
        parcels: [parcel],
        async: false,
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro na API da Shippo: ${response.statusText}`);
    }

    const shipment = await response.json();
    const rates = shipment.rates || [];

    if (rates.length > 0) {
      const selectedRate = rates.find((rate: any) => rate.servicelevel?.token?.includes(shippingMethod)) || rates[0];
      if (selectedRate) {
        return new Response(
          JSON.stringify({
            price: Number(selectedRate.amount).toFixed(2), // Formata o preço com 2 casas decimais
            currency: selectedRate.currency,
            deliveryTime: {
              min: selectedRate.estimated_days || 3,
              max: (selectedRate.estimated_days || 3) + 2,
            },
            weightUsed: parcel.weight,
            isVolumetric: parcel.length !== '' || parcel.width !== '' || parcel.height !== '',
          }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }
    return new Response(JSON.stringify({ error: 'Nenhuma taxa disponível' }), { status: 400 });
  } catch (error) {
    console.error('Erro ao calcular o frete:', error);
    return new Response(JSON.stringify({ error: 'Erro ao calcular o frete' }), { status: 500 });
  }
}