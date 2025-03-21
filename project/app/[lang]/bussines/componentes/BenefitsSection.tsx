import React from "react";
import { Benefit } from "../types/contentTypes";
import {
  Building2,
  BarChart3,
  TrendingUp,
  Briefcase,
} from "lucide-react";

// Map icon names to Lucide React components
const iconMap: { [key: string]: React.ComponentType<any> } = {
  Building2: Building2,
  BarChart3: BarChart3,
  TrendingUp: TrendingUp,
  Briefcase: Briefcase,
};

interface BenefitsSectionProps {
  benefits: Benefit[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {benefits.map((benefit, index) => {
        const IconComponent = iconMap[benefit.icon];
        return (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md">
            {IconComponent && <IconComponent className="h-8 w-8 mb-4" />}
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BenefitsSection;