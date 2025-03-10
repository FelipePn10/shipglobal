import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface StatsCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: 'blue' | 'rose' | 'amber' | 'emerald';
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, color }) => {
  const getColorClasses = () => {
    switch (color) {
      case 'blue':
        return { bg: 'bg-blue-100', text: 'text-blue-600', icon: 'bg-blue-500' };
      case 'rose':
        return { bg: 'bg-rose-100', text: 'text-rose-600', icon: 'bg-rose-500' };
      case 'amber':
        return { bg: 'bg-amber-100', text: 'text-amber-600', icon: 'bg-amber-500' };
      case 'emerald':
        return { bg: 'bg-emerald-100', text: 'text-emerald-600', icon: 'bg-emerald-500' };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-600', icon: 'bg-gray-500' };
    }
  };
  
  const colors = getColorClasses();
  
  return (
    <Card className={`${colors.bg} border-0`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className={`${colors.text} text-sm font-medium mb-1`}>{title}</p>
            <p className="text-3xl font-bold">{value}</p>
          </div>
          <div className={`${colors.icon} text-white p-3 rounded-lg`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};