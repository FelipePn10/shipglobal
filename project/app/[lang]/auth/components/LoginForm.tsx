import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Mail, Lock, Eye, EyeOff, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface LoginFormProps {
  countries: { code: string; name: string }[];
  currentLanguage: string;
  showPassword: boolean;
  isLoading: boolean;
  error: string | null;
  activeTab: 'login' | 'register';
  handlePasswordToggle: () => void;
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  countries,
  currentLanguage,
  showPassword,
  isLoading,
  error,
  activeTab,
  handlePasswordToggle,
  handleLogin,
}) => {
  return (
    <TabsContent value="login">
      <Card className="shadow-xl border-gray-100">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">Área do Cliente</CardTitle>
            <div className="lg:hidden flex items-center space-x-2">
              <Package className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-xl">ShipGlobal</span>
            </div>
          </div>
          <CardDescription>Acesse sua conta ou crie uma nova para gerenciar seus envios</CardDescription>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </CardHeader>

        <AnimatePresence mode="wait">
          {activeTab === 'login' && (
            <motion.form
              onSubmit={handleLogin}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <CardContent className="space-y-4 pt-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Senha</Label>
                    <Link
                      href={`/${currentLanguage}/recuperar-senha`}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Esqueceu sua senha?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="pl-10"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                      onClick={handlePasswordToggle}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                  {isLoading ? 'Entrando...' : 'Entrar'}
                </Button>
              </CardFooter>
            </motion.form>
          )}
        </AnimatePresence>
      </Card>
    </TabsContent>
  );
};