import axios from 'axios';

// API URL for exchange rates (free and no API key required)
const API_URL = 'https://api.exchangerate.host/latest';

interface ExchangeRateResponse {
  success: boolean;
  base: string;
  date: string;
  rates: Record<string, number>;
}

/**
 * Get latest exchange rates for a base currency
 */
export const getExchangeRates = async (baseCurrency: string): Promise<Record<string, number>> => {
  try {
    // Fetch real exchange rates from the API
    const { data } = await axios.get<ExchangeRateResponse>(`${API_URL}?base=${baseCurrency}`);
    
    if (!data.success) {
      throw new Error('Failed to fetch exchange rates');
    }

    return data.rates;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    throw error;
  }
};

/**
 * Convert an amount from one currency to another using the provided exchange rates
 */
export const convertCurrency = (
  amount: number,
  fromCurrency: string,
  toCurrency: string,
  rates: Record<string, number>
): number => {
  if (fromCurrency === toCurrency) return amount;

  // If rates are based on the base currency
  const fromRate = rates[fromCurrency];
  const toRate = rates[toCurrency];

  if (!fromRate || !toRate) {
    throw new Error(`Exchange rate not available for ${fromCurrency} or ${toCurrency}`);
  }

  // Convert to base currency first, then to target currency
  return (amount / fromRate) * toRate;
};