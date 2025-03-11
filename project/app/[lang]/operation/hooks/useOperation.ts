import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const useOperation = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  const currentLanguage = 'en';
  const router = useRouter();

  // Avança automaticamente a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev === totalSteps ? 1 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSteps]);

  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  return {
    currentStep,
    setCurrentStep,
    totalSteps,
    currentLanguage,
    router,
    goToStep,
  };
};