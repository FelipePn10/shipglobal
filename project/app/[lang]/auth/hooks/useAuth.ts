import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export const useAuth = (lang: string) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8 && /[A-Za-z]/.test(password) && /\d/.test(password);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!validateEmail(email)) {
      setError('Por favor, insira um email válido.');
      setIsLoading(false);
      return;
    }

    if (!validatePassword(password)) {
      setError('A senha deve ter pelo menos 8 caracteres, incluindo letras e números.');
      setIsLoading(false);
      return;
    }

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
        callbackUrl: `/${lang}/dashboard`,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        router.push(result?.url || `/${lang}/dashboard`);
      }
    } catch (err) {
      setError('Erro ao conectar ao servidor');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('reg-email') as string;
    const password = formData.get('reg-password') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const country = formData.get('country') as string;

    if (!validateEmail(email)) {
      setError('Por favor, insira um email válido.');
      setIsLoading(false);
      return;
    }

    if (!validatePassword(password)) {
      setError('A senha deve ter pelo menos 8 caracteres, incluindo letras e números.');
      setIsLoading(false);
      return;
    }

    if (!country) {
      setError('Por favor, selecione um país.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`/${lang}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name: `${firstName} ${lastName}`, country }),
      });

      if (response.ok) {
        router.push(`/${lang}/dashboard`);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Erro ao registrar');
      }
    } catch (err) {
      setError('Erro ao conectar ao servidor');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTabChange = (value: string) => {
    if (value === 'login' || value === 'register') {
      setActiveTab(value);
      setError(null);
    }
  };

  const handlePasswordToggle = () => setShowPassword((prev) => !prev);

  return {
    currentLanguage: lang,
    showPassword,
    isLoading,
    error,
    activeTab,
    handleTabChange,
    handlePasswordToggle,
    handleLogin,
    handleRegister,
  };
};