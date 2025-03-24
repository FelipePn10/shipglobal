import { useState } from 'react';

interface ToastProps {
  title: string;
  description?: string;
  duration?: number;
}

export function toast({ title, description, duration = 3000 }: ToastProps) {
  // Implementação básica do toast
  console.log(`Toast: ${title} - ${description}`);
  
  // Aqui você pode implementar a lógica real do toast
  // Por exemplo, usando uma biblioteca como react-hot-toast ou react-toastify
} 