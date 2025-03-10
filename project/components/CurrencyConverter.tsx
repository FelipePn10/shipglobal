// components/CurrencyConverter.tsx
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const exchangeRates: { [key: string]: number } = {
  EUR: 1,
  USD: 1.09,
  BRL: 6.26,
  CNY: 7.91,
  JPY: 164.12,
  AUD: 1.65,
};

interface CurrencyConverterProps {
  baseCurrency: string;
  currencies: Array<{ code: string; name: string; symbol: string }>;
}

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ baseCurrency, currencies }) => {
  const [fromCurrency, setFromCurrency] = useState(baseCurrency);
  const [toCurrency, setToCurrency] = useState(fromCurrency === 'EUR' ? 'USD' : 'EUR');
  const [amount, setAmount] = useState('100');
  
  const convertCurrency = (amount: number, from: keyof typeof exchangeRates, to: keyof typeof exchangeRates) => {
    const fromRate = exchangeRates[from] || 1;
    const toRate = exchangeRates[to] || 1;
    
    // Convert to EUR first (base currency), then to target currency
    const amountInEUR = amount / fromRate;
    const result = amountInEUR * toRate;
    
    return result.toFixed(2);
  };
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };
  
  const result = convertCurrency(parseFloat(amount) || 0, fromCurrency as keyof typeof exchangeRates, toCurrency as keyof typeof exchangeRates);
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="mb-4">
        <div className="text-sm font-medium text-gray-500 mb-1">Converter</div>
        <div className="flex items-center gap-2">
          <Input 
            type="number" 
            value={amount}
            onChange={handleAmountChange}
            className="border-gray-200"
          />
          <Select value={fromCurrency} onValueChange={setFromCurrency}>
            <SelectTrigger className="w-28">
              <SelectValue placeholder="From" />
            </SelectTrigger>
            <SelectContent>
              {currencies.map((curr) => (
                <SelectItem key={curr.code} value={curr.code}>
                  {curr.symbol} {curr.code}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div>
        <div className="text-sm font-medium text-gray-500 mb-1">Resultado</div>
        <div className="flex items-center gap-2">
          <Input 
            readOnly
            value={result}
            className="bg-gray-50 border-gray-200"
          />
          <Select value={toCurrency} onValueChange={setToCurrency}>
            <SelectTrigger className="w-28">
              <SelectValue placeholder="To" />
            </SelectTrigger>
            <SelectContent>
              {currencies.map((curr) => (
                <SelectItem key={curr.code} value={curr.code}>
                  {curr.symbol} {curr.code}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;