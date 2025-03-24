"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Mail, Phone, Globe, Clock, CheckCircle } from "lucide-react";

// Esquema de validação do formulário
const formSchema = z.object({
  nome: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  assunto: z.string().min(5, { message: "Assunto deve ter pelo menos 5 caracteres" }),
  pais: z.string().min(1, { message: "Selecione um país" }),
  mensagem: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres" }),
});

export default function ContatoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      assunto: "",
      pais: "",
      mensagem: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  }

  const countries = [
    "Brasil", "Estados Unidos", "Canadá", "Reino Unido", "Alemanha", 
    "França", "Espanha", "Portugal", "Itália", "Japão", 
    "China", "Austrália", "México", "Argentina", "Chile", "Colômbia"
  ];

  return (
    <main className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 py-16 text-white">
        <div className="container mx-auto px-4 text-center mt-8">
          <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Estamos presentes em 16 países para facilitar suas compras internacionais.
            Nossa equipe está pronta para ajudar você.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <div>
            <Card className="w-full shadow-lg border-blue-100">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-700">Formulário de Contato</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
                    <h3 className="text-xl font-medium text-gray-900">Mensagem Enviada!</h3>
                    <p className="mt-2 text-gray-600">
                      Obrigado por entrar em contato. Nossa equipe responderá em breve.
                    </p>
                    <Button 
                      className="mt-4 text-white bg-blue-500 hover:bg-blue-600"
                      onClick={() => {
                        setIsSubmitted(false);
                        form.reset();
                      }}
                    >
                      Enviar nova mensagem
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                              <Input placeholder="Seu nome completo" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="seu@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="assunto"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Assunto</FormLabel>
                              <FormControl>
                                <Input placeholder="Assunto da mensagem" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="pais"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>País</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecione seu país" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {countries.map((country) => (
                                    <SelectItem key={country} value={country}>
                                      {country}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="mensagem"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mensagem</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Digite sua mensagem aqui..."
                                className="min-h-32"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-700">
                        Enviar Mensagem
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-md border-blue-100">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-700">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-900">Endereço</h4>
                      <p className="text-gray-600">Av. Lucio De Held, 1279, Maringá - PR</p>
                      <p className="text-gray-600">Brasil, CEP: 87033-230</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-900">Telefone</h4>
                      <p className="text-gray-600">+55 (44) 99180-5405</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <p className="text-gray-600">contato@shipglobal.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-900">Horário de Atendimento</h4>
                      <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                      <p className="text-gray-600">Sábado: 9h às 13h</p>
                    </div>
                  </div>
                </div>              
              </CardContent>
            </Card>

            <Card className="shadow-md border-blue-100 mt-4">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-700">Nossos Países de Atuação</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <Tabs defaultValue="americas" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="americas">Américas</TabsTrigger>
                    <TabsTrigger value="europa">Europa</TabsTrigger>
                    <TabsTrigger value="asia">Ásia-Pacífico</TabsTrigger>
                  </TabsList>
                  <TabsContent value="americas" className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-600" />
                      <span>Brasil - São Paulo (Sede)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-600" />
                      <span>Estados Unidos - Miami</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-600" />
                      <span>Canadá - Toronto</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-600" />
                      <span>México - Cidade do México</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-600" />
                      <span>Argentina - Buenos Aires</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-600" />
                      <span>Chile - Santiago</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-600" />
                      <span>Colômbia - Bogotá</span>
                    </div>
                  </TabsContent>
                  <TabsContent value="europa" className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-600" />
                      <span>Reino Unido - Londres</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-600" />
                      <span>Alemanha - Berlim</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-600" />
                      <span>França - Paris</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-600" />
                      <span>Espanha - Madrid</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-600" />
                      <span>Portugal - Lisboa</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-600" />
                      <span>Itália - Milão</span>
                    </div>
                  </TabsContent>
                  <TabsContent value="asia" className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-600" />
                      <span>Japão - Tóquio</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-600" />
                      <span>China - Xangai</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-600" />
                      <span>Austrália - Sydney</span>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-blue-700 mb-8 text-center">Perguntas Frequentes</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="shadow-md border-blue-100">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-lg text-blue-700">Como funciona o redirecionamento?</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700">
                Nós fornecemos um endereço no país de origem para suas compras. Após recebermos seus produtos, 
                cuidamos de todo o processo de envio internacional até você.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md border-blue-100">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-lg text-blue-700">Quanto tempo leva para receber meus produtos?</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700">
                O prazo médio é de 7 a 21 dias úteis, dependendo do país de origem e do destino final.
                Oferecemos opções de envio expresso para entregas mais rápidas.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md border-blue-100">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-lg text-blue-700">Quais são as taxas e impostos?</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700">
                Nossos serviços incluem uma taxa básica de redirecionamento. Impostos de importação 
                são de responsabilidade do cliente, mas oferecemos consultoria para minimizá-los.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md border-blue-100">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-lg text-blue-700">Como posso rastrear meu pedido?</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700">
                Todos os envios são registrados com código de rastreamento. Você pode acompanhar 
                seu pedido pela nossa plataforma ou pelo aplicativo em tempo real.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8">
          <Button className="bg-blue-500 text-white hover:bg-blue-700">Ver todas as perguntas frequentes</Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 mb-12 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para facilitar suas compras internacionais?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Registre-se hoje e receba um desconto especial no seu primeiro redirecionamento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-700 hover:bg-blue-50">Criar uma conta</Button>
            <Button variant="outline" className="border-white text-white hover:bg-blue-600">
              Falar com um consultor
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}