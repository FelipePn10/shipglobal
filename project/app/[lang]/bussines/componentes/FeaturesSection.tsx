"use client";

import React from "react";
import { Feature } from "../types/contentTypes";
import {
  Package,
  FileText,
  Users,
  CreditCard,
} from "lucide-react";

// Map icon names to Lucide React components
const iconMap: { [key: string]: React.ComponentType<any> } = {
  Package: Package,
  FileText: FileText,
  Users: Users,
  CreditCard: CreditCard,
};

interface FeaturesSectionProps {
  features: Feature[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => {
        const IconComponent = iconMap[feature.icon];
        return (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md">
            {IconComponent && <IconComponent className="h-6 w-6 mb-4" />}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesSection;