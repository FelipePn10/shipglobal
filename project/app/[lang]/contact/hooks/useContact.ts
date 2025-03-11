import { useState, useEffect } from 'react';
import { countries } from '../data/countries';

export const useContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    subject: '',
    message: '',
  });
  const [selectedCountry, setSelectedCountry] = useState<{ code: string; name: string; localName: string } | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'country') {
      setSelectedCountry(countries.find((c) => c.code === value) || null);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsAnimating(true);

    setTimeout(() => {
      setIsSubmitted(true);
      setIsAnimating(false);
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      country: '',
      subject: '',
      message: '',
    });
    setIsSubmitted(false);
    setSelectedCountry(null);
  };

  return {
    formData,
    selectedCountry,
    isSubmitted,
    isAnimating,
    handleChange,
    handleSubmit,
    resetForm,
  };
};