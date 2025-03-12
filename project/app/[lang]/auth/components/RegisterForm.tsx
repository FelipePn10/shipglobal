import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CardContent, CardFooter } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Lock, Eye, EyeOff, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface RegisterFormProps {
  countries: { code: string; name: string }[];
  currentLanguage: string;
  showPassword: boolean;
  isLoading: boolean;
  error: string | null;
  activeTab: 'login' | 'register';
  handlePasswordToggle: () => void;
  handleRegister: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  countries,
  currentLanguage,
  showPassword,
  isLoading,
  error,
  activeTab,
  handlePasswordToggle,
  handleRegister,
}) => {
  return (
    <TabsContent value="register">
      <AnimatePresence mode="wait">
        {activeTab === 'register' && (
          <motion.form
            onSubmit={handleRegister}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <CardContent className="space-y-4 pt-6">
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nome</Label>
                  <Input id="firstName" name="firstName" placeholder="Nome" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Sobrenome</Label>
                  <Input id="lastName" name="lastName" placeholder="Sobrenome" required />
                </div>
              </div>

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
                <Label htmlFor="phone">Telefone (Opcional)</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+55 123 456 7890"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Mínimo 8 caracteres"
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

              <div className="space-y-2">
                <Label htmlFor="nationality">Nacionalidade</Label>
                <Select name="nationality" required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione sua nacionalidade" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Endereço (Opcional)</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="Rua Exemplo, 123"
                />
              </div>

              <div className="pt-2">
                <p className="text-sm text-gray-500">
                  Ao se cadastrar, você concorda com nossos{' '}
                  <Link
                    href={`/${currentLanguage}/termos`}
                    className="text-blue-600 hover:underline"
                  >
                    Termos de Serviço
                  </Link>{' '}
                  e{' '}
                  <Link
                    href={`/${currentLanguage}/privacidade`}
                    className="text-blue-600 hover:underline"
                  >
                    Política de Privacidade
                  </Link>
                </p>
              </div>
            </CardContent>

            <CardFooter>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                {isLoading ? 'Criando conta...' : 'Criar conta'}
              </Button>
            </CardFooter>
          </motion.form>
        )}
      </AnimatePresence>
    </TabsContent>
  );
};