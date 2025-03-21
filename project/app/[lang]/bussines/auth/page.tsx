"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Package2 } from "lucide-react";

import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginContent } from "../types/authTypes";
import { Language } from "../types/contentTypes";

// Definir o conteúdo para cada idioma
const content: Record<Language, LoginContent> = {
  en: {
    title: "Business Account",
    subtitle: "Login to your business account",
    login: "Login",
    register: "Register",
    email: "Email",
    emailPlaceholder: "your@company.com",
    password: "Password",
    passwordPlaceholder: "Enter your password",
    forgotPassword: "Forgot password?",
    loginButton: "Login",
    noAccount: "Don't have an account?",
    createAccount: "Create account",
    registerTitle: "Create Business Account",
    registerSubtitle: "Register your company for business import services",
    companyName: "Company Name",
    companyNamePlaceholder: "Your Company Inc.",
    taxId: "Tax ID / CNPJ",
    taxIdPlaceholder: "Enter your company tax ID",
    contactName: "Contact Name",
    contactNamePlaceholder: "Full name",
    phone: "Phone",
    phonePlaceholder: "+1 (555) 000-0000",
    confirmPassword: "Confirm Password",
    confirmPasswordPlaceholder: "Confirm your password",
    termsAndConditions: "I agree to the terms and conditions",
    registerButton: "Register",
    alreadyHaveAccount: "Already have an account?",
    signIn: "Sign in",
  },
  pt: {
    title: "Conta Empresarial",
    subtitle: "Acesse sua conta empresarial",
    login: "Entrar",
    register: "Registrar",
    email: "Email",
    emailPlaceholder: "seu@empresa.com",
    password: "Senha",
    passwordPlaceholder: "Digite sua senha",
    forgotPassword: "Esqueceu a senha?",
    loginButton: "Entrar",
    noAccount: "Não tem uma conta?",
    createAccount: "Criar conta",
    registerTitle: "Criar Conta Empresarial",
    registerSubtitle: "Registre sua empresa para serviços de importação empresarial",
    companyName: "Nome da Empresa",
    companyNamePlaceholder: "Sua Empresa Ltda.",
    taxId: "CNPJ",
    taxIdPlaceholder: "Digite o CNPJ da empresa",
    contactName: "Nome do Contato",
    contactNamePlaceholder: "Nome completo",
    phone: "Telefone",
    phonePlaceholder: "+55 (11) 00000-0000",
    confirmPassword: "Confirmar Senha",
    confirmPasswordPlaceholder: "Confirme sua senha",
    termsAndConditions: "Concordo com os termos e condições",
    registerButton: "Registrar",
    alreadyHaveAccount: "Já tem uma conta?",
    signIn: "Entrar",
  },
  es: {
    title: "Cuenta Empresarial",
    subtitle: "Accede a tu cuenta empresarial",
    login: "Iniciar sesión",
    register: "Registrarse",
    email: "Email",
    emailPlaceholder: "tu@empresa.com",
    password: "Contraseña",
    passwordPlaceholder: "Ingresa tu contraseña",
    forgotPassword: "¿Olvidaste tu contraseña?",
    loginButton: "Iniciar sesión",
    noAccount: "¿No tienes una cuenta?",
    createAccount: "Crear cuenta",
    registerTitle: "Crear Cuenta Empresarial",
    registerSubtitle: "Registra tu empresa para servicios de importación empresarial",
    companyName: "Nombre de la Empresa",
    companyNamePlaceholder: "Tu Empresa S.A.",
    taxId: "ID Fiscal",
    taxIdPlaceholder: "Ingresa el ID fiscal de la empresa",
    contactName: "Nombre de Contacto",
    contactNamePlaceholder: "Nombre completo",
    phone: "Teléfono",
    phonePlaceholder: "+34 (91) 000-0000",
    confirmPassword: "Confirmar Contraseña",
    confirmPasswordPlaceholder: "Confirma tu contraseña",
    termsAndConditions: "Acepto los términos y condiciones",
    registerButton: "Registrarse",
    alreadyHaveAccount: "¿Ya tienes una cuenta?",
    signIn: "Iniciar sesión",
  },
};

export default function BusinessLogin() {
  const searchParams = useSearchParams();
  const lang = (searchParams.get("lang") || "pt") as Language;
  const initialTab = searchParams.get("tab") === "register" ? "register" : "login";
  const [activeTab, setActiveTab] = useState<"login" | "register">(initialTab);

  const t = content[lang] || content.en;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="flex flex-col items-center mb-6">
          <Link href={`/${lang}/business`} className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-md bg-blue-600 flex items-center justify-center text-white mr-2">
              <Package2 className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold">ShipGlobal</span>
          </Link>
          <h1 className="text-3xl font-bold">{t.title}</h1>
          <p className="text-gray-500 dark:text-gray-400">{t.subtitle}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{activeTab === "login" ? t.title : t.registerTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "login" | "register")} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">{t.login}</TabsTrigger>
                <TabsTrigger value="register">{t.register}</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <LoginForm t={t} lang={lang} onSwitchToRegister={() => setActiveTab("register")} />
              </TabsContent>
              <TabsContent value="register">
                <RegisterForm t={t} lang={lang} onSwitchToLogin={() => setActiveTab("login")} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}