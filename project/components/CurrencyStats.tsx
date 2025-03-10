import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Definindo exchangeRates no escopo do arquivo
const exchangeRates = {
  EUR: 1,
  USD: 1.09,
  BRL: 6.26,
  CNY: 7.91,
  JPY: 164.12,
  AUD: 1.65,
} as const;

// Mock data - in a real app, this would come from an API
const generateMockData = (baseCurrency: keyof typeof exchangeRates, currencies: Array<keyof typeof exchangeRates>) => {
  const baseRates = exchangeRates;

  // Generate 7 days of data with slight variations
  return Array.from({ length: 7 }).map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - 6 + i);

    const data: { date: string } & { [key: string]: number | string } = {
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    };

    currencies.forEach(currency => {
      if (currency !== baseCurrency) {
        // Add slight random variations to make the chart interesting
        const variation = (Math.random() * 0.1) - 0.05;
        const baseRate = baseRates[currency] / baseRates[baseCurrency];
        data[currency] = Number((baseRate + (baseRate * variation)).toFixed(4));
      }
    });

    return data;
  });
};

interface CurrencyStatsProps {
  baseCurrency: keyof typeof exchangeRates;
  currencies: Array<keyof typeof exchangeRates>;
}

export const CurrencyStats: React.FC<CurrencyStatsProps> = ({ baseCurrency, currencies }) => {
  const data = generateMockData(baseCurrency, currencies);
  const filteredCurrencies = currencies.filter(c => c !== baseCurrency);

  const colorMap: { [key in keyof typeof exchangeRates]: string } = {
    EUR: "#4f46e5",
    USD: "#10b981",
    BRL: "#f59e0b",
    CNY: "#ef4444",
    JPY: "#8b5cf6",
    AUD: "#ec4899",
  };

  return (
    <div className="h-full">
      <div className="mb-3 flex items-center justify-between">
        <div className="text-sm font-medium">Taxas de câmbio ({baseCurrency})</div>
        <div className="flex items-center gap-3">
          {filteredCurrencies.slice(0, 3).map(currency => (
            <div key={currency as string} className="flex items-center text-xs">
              <div
                className="w-3 h-3 rounded-full mr-1"
                style={{ backgroundColor: colorMap[currency] }}
              ></div>
              <span>{currency}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 10 }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 10 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value.toFixed(2)}
            />
            <Tooltip />
            {filteredCurrencies.slice(0, 4).map(currency => (
              <Line
                key={currency as string}
                type="monotone"
                dataKey={currency}
                stroke={colorMap[currency]}
                activeDot={{ r: 6 }}
                dot={false}
                strokeWidth={2}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};