import { FaGlobe, FaShippingFast, FaPercentage, FaHeadset, FaGift, FaRegCreditCard } from 'react-icons/fa';
import { HiCurrencyDollar, HiStar } from 'react-icons/hi';
import { IconType } from 'react-icons'; // Import IconType for typing

export type BenefitType = {
  icon: IconType; // Use IconType to type the icon as a component
  key: string;
};

export type PlanType = {
  id: string;
  key: string;
  price: number;
  color: string;
  popular?: boolean;
  benefits: BenefitType[];
};

export const getPlans = (isYearly: boolean): PlanType[] => [
  {
    id: 'free',
    key: 'basic',
    price: 0,
    color: 'from-blue-400 to-blue-600',
    benefits: [
      { icon: FaGlobe, key: 'countries' },
      { icon: FaShippingFast, key: 'shipping' },
      { icon: HiCurrencyDollar, key: 'fees' },
    ],
  },
  {
    id: 'plus',
    key: 'plus',
    price: isYearly ? 29.90 * 10 : 29.90,
    color: 'from-purple-400 to-purple-600',
    popular: true,
    benefits: [
      { icon: FaGlobe, key: 'countries' },
      { icon: FaShippingFast, key: 'shipping' },
      { icon: FaPercentage, key: 'discount' },
      { icon: FaHeadset, key: 'support' },
      { icon: FaGift, key: 'gifts' },
    ],
  },
  {
    id: 'premium',
    key: 'premium',
    price: isYearly ? 59.90 * 10 : 59.90,
    color: 'from-yellow-400 to-yellow-600',
    benefits: [
      { icon: FaGlobe, key: 'countries' },
      { icon: FaShippingFast, key: 'shipping' },
      { icon: FaPercentage, key: 'discount' },
      { icon: FaHeadset, key: 'support' },
      { icon: FaRegCreditCard, key: 'cashback' },
      { icon: HiStar, key: 'exclusive' },
    ],
  },
];