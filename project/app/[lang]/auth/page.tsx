"use client";

import React from 'react';
import { useAuth } from './hooks/useAuth';
import { AuthLayout } from './components/AuthLayout';
import { BrandingSection } from './components/BrandingSection';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { countries } from './data/countries';

export default function AuthPage({ params }: { params: { lang: string } }) {
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
  } = useAuth(params.lang);

  return (
    <AuthLayout>
      <BrandingSection currentLanguage={''} />
      <div className="lg:pl-8">
        <LoginForm
          countries={countries}
          currentLanguage={currentLanguage}
          showPassword={showPassword}
          isLoading={isLoading}
          error={error}
          activeTab={activeTab}
          handleTabChange={handleTabChange}
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
          handleTabChange={handleTabChange}
          handlePasswordToggle={handlePasswordToggle}
          handleRegister={handleRegister}
        />
      </div>
    </AuthLayout>
  );
}