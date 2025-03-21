export type Language = "en" | "pt" | "es";

export interface LoginContent {
  title: string;
  subtitle: string;
  login: string;
  register: string;
  email: string;
  emailPlaceholder: string;
  password: string;
  passwordPlaceholder: string;
  forgotPassword: string;
  loginButton: string;
  noAccount: string;
  createAccount: string;
  registerTitle: string;
  registerSubtitle: string;
  companyName: string;
  companyNamePlaceholder: string;
  taxId: string;
  taxIdPlaceholder: string;
  contactName: string;
  contactNamePlaceholder: string;
  phone: string;
  phonePlaceholder: string;
  confirmPassword: string;
  confirmPasswordPlaceholder: string;
  termsAndConditions: string;
  registerButton: string;
  alreadyHaveAccount: string;
  signIn: string;
}

export interface BusinessUser {
  email: string;
  password: string;
  companyName: string;
  taxId: string;
  contactName: string;
  phone: string;
}