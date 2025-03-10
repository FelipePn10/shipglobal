import React from 'react';
import { Globe } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Language {
  code: string;
  name: string;
}

interface LocaleSelectorProps {
  languages: Language[];
  currentLanguage: string;
  onChange: (value: string) => void;
}

export const LocaleSelector: React.FC<LocaleSelectorProps> = ({ 
  languages, 
  currentLanguage, 
  onChange 
}) => {
  return (
    <div className="flex items-center">
      <Globe className="h-4 w-4 mr-2 text-blue-500" />
      <Select value={currentLanguage} onValueChange={onChange}>
        <SelectTrigger className="w-32 border-blue-200 bg-blue-50">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};