"use client";

import React from 'react';
import { use } from 'react'; // Importe o hook use
import { useAuth } from './hooks/useAuth';
import { AuthLayout } from './components/AuthLayout';
import { BrandingSection } from './components/BrandingSection';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { countries } from './data/countries';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function AuthPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params); // Desembrulha o params com React.use()
  const {
    currentLanguage,
    showPassword,
    isLoading,
    error,
    activeTab,
    handleTabChange,
    handlePasswordToggle,
    handleLogin,
    handleRegister,
  } = useAuth(lang); // Passe o lang desembrulhado para useAuth

  return (
    <AuthLayout>
      <BrandingSection currentLanguage={currentLanguage} />
      <div className="lg:pl-8">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <div className="px-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Cadastro</TabsTrigger>
            </TabsList>
          </div>
          <LoginForm
            countries={countries}
            currentLanguage={currentLanguage}
            showPassword={showPassword}
            isLoading={isLoading}
            error={error}
            activeTab={activeTab}
            handlePasswordToggle={handlePasswordToggle}
            handleLogin={handleLogin}
          />
          <RegisterForm
            countries={countries}
            currentLanguage={currentLanguage}
            showPassword={showPassword}
            isLoading={isLoading}
            error={error}
            activeTab={activeTab}
            handlePasswordToggle={handlePasswordToggle}
            handleRegister={handleRegister}
          />
        </Tabs>
      </div>
    </AuthLayout>
  );
}