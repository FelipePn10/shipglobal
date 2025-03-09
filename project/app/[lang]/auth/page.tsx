"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Package, User, Mail, Lock, Eye, EyeOff, ArrowRight, Globe } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface AuthPageProps {
  currentLanguage: string
}

export default function AuthPage({ currentLanguage }: AuthPageProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('login')
  const router = useRouter()

  // Countries supported by the service
  const countries = [
    { code: "US", name: "United States (EUA)" },
    { code: "UK", name: "United Kingdom (Reino Unido)" },
    { code: "CN", name: "China" },
    { code: "JP", name: "Japan (Japão)" },
    { code: "DE", name: "Germany (Alemanha)" },
    { code: "AU", name: "Australia (Austrália)" },
    { code: "CA", name: "Canada (Canadá)" },
    { code: "ES", name: "Spain (Espanha)" },
    { code: "FR", name: "France (França)" },
    { code: "IT", name: "Italy (Itália)" },
    { code: "PT", name: "Portugal" },
    { code: "PY", name: "Paraguay (Paraguai)" },
    { code: "TR", name: "Turkey (Turquia)" },
    { code: "BR", name: "Brazil (Brasil)" },
    { code: "TH", name: "Thailand (Tailândia)" },
    { code: "BE", name: "Belgium (Bélgica)" }
  ]

  // Form handlers
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      router.push(`/${currentLanguage}/dashboard`)
    }, 1500)
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      router.push(`/${currentLanguage}/dashboard`)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left side - Branding and Benefits */}
        <motion.div 
          className="hidden lg:flex flex-col space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-2">
            <Package className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-2xl">ShipGlobal</span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Seu endereço global em 17 países</h1>
            <p className="text-gray-600">Compre em lojas internacionais e receba produtos onde você estiver. Serviço completo de redirecionamento de compras.</p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Globe className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">Endereços em 17 países</h3>
                  <p className="text-sm text-gray-500">Acesso a lojas online exclusivas em todo o mundo</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Package className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">Consolidação de pacotes</h3>
                  <p className="text-sm text-gray-500">Economize em frete combinando múltiplas compras</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <ArrowRight className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">Entrega internacional</h3>
                  <p className="text-sm text-gray-500">Envio rápido e seguro para seu endereço</p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            className="relative h-64 w-full rounded-xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-90 rounded-xl"></div>
            <div className="absolute inset-0 flex flex-col justify-center p-8">
              <h3 className="text-white text-xl font-medium mb-2">Cadastre-se hoje</h3>
              <p className="text-blue-100">Receba um endereço exclusivo em cada um dos 17 países disponíveis.</p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Right side - Auth Forms */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="shadow-xl border-gray-100">
            <CardHeader className="space-y-1">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold">Área do Cliente</CardTitle>
                <div className="lg:hidden flex items-center space-x-2">
                  <Package className="h-6 w-6 text-blue-600" />
                  <span className="font-bold text-xl">ShipGlobal</span>
                </div>
              </div>
              <CardDescription>
                Acesse sua conta ou crie uma nova para gerenciar seus envios
              </CardDescription>
            </CardHeader>
            
            <Tabs defaultValue="login" className="w-full" onValueChange={setActiveTab}>
              <div className="px-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Cadastro</TabsTrigger>
                </TabsList>
              </div>
              
              {/* Login Form */}
              <TabsContent value="login">
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
                              type={showPassword ? "text" : "password"} 
                              placeholder="••••••••" 
                              className="pl-10" 
                              required
                            />
                            <button 
                              type="button"
                              className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                          </div>
                        </div>
                      </CardContent>
                      
                      <CardFooter>
                        <Button 
                          type="submit" 
                          className="w-full bg-blue-600 hover:bg-blue-700"
                          disabled={isLoading}
                        >
                          {isLoading ? "Entrando..." : "Entrar"}
                        </Button>
                      </CardFooter>
                    </motion.form>
                  )}
                </AnimatePresence>
              </TabsContent>
              
              {/* Registration Form */}
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
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">Nome</Label>
                            <Input 
                              id="firstName" 
                              placeholder="Nome" 
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Sobrenome</Label>
                            <Input 
                              id="lastName" 
                              placeholder="Sobrenome" 
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <Input 
                              id="reg-email" 
                              type="email" 
                              placeholder="seu@email.com" 
                              className="pl-10" 
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="password">Senha</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <Input 
                              id="reg-password" 
                              type={showPassword ? "text" : "password"} 
                              placeholder="Mínimo 8 caracteres" 
                              className="pl-10" 
                              required
                            />
                            <button 
                              type="button"
                              className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="country">País de Origem</Label>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Selecione seu país" />
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
                        <Button 
                          type="submit" 
                          className="w-full bg-blue-600 hover:bg-blue-700"
                          disabled={isLoading}
                        >
                          {isLoading ? "Criando conta..." : "Criar conta"}
                        </Button>
                      </CardFooter>
                    </motion.form>
                  )}
                </AnimatePresence>
              </TabsContent>
            </Tabs>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}