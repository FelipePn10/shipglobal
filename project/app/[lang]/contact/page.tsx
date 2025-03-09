"use client";

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Globe, Send } from 'lucide-react';

const countries = [
  { code: "US", name: "EUA", localName: "United States" },
  { code: "GB", name: "Reino Unido", localName: "United Kingdom" },
  { code: "CN", name: "China", localName: "China" },
  { code: "JP", name: "Japão", localName: "Japan" },
  { code: "DE", name: "Alemanha", localName: "Germany" },
  { code: "AU", name: "Austrália", localName: "Australia" },
  { code: "CA", name: "Canadá", localName: "Canada" },
  { code: "ES", name: "Espanha", localName: "Spain" },
  { code: "FR", name: "França", localName: "France" },
  { code: "IT", name: "Itália", localName: "Italy" },
  { code: "PT", name: "Portugal", localName: "Portugal" },
  { code: "PY", name: "Paraguai", localName: "Paraguay" },
  { code: "TR", name: "Turquia", localName: "Turkey" },
  { code: "BR", name: "Brasil", localName: "Brazil" },
  { code: "TH", name: "Tailândia", localName: "Thailand" },
  { code: "BE", name: "Bélgica", localName: "Belgium" },  
  { code: "OT", name: "Outro", localName: "Other" },

];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    subject: '',
    message: ''
  });
  const [selectedCountry, setSelectedCountry] = useState<{ code: string; name: string; localName: string } | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'country') {
      setSelectedCountry(countries.find(c => c.code === value) || null);
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
      message: ''
    });
    setIsSubmitted(false);
    setSelectedCountry(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-blue-900">
      {/* Header */}
      <header className="w-full py-8 bg-gradient-to-r from-blue-600 to-purple-400 text-white">
        <div className="container mx-auto px-4 mt-12">
          <h1 className="text-4xl font-bold text-center mb-2">Entre em Contato</h1>
          <p className="text-center text-lg">Estamos aqui para ajudar com suas compras internacionais</p>
        </div>
      </header>
      
      {/* Main content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-500 hover:scale-105">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Informações de Contato</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-pink-400 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>contato@suaempresa.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-yellow-400 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold">Telefone</h3>
                  <p>+55 (00) 0000-0000</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-purple-400 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold">Endereço</h3>
                  <p>Av. Principal, 1000</p>
                  <p>São Paulo, Brasil</p>
                </div>
              </div>
            </div>
            
            {/* World Map with Countries */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Globe className="text-blue-500 mr-2" size={20} />
                Nossa Presença Global
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {countries.map((country) => (
                  <div key={country.code} 
                       className={`p-2 rounded-lg transition-all duration-300 ${
                         selectedCountry?.code === country.code 
                           ? 'bg-blue-100 shadow-md' 
                           : 'hover:bg-blue-50'
                       }`}>
                    <p className="font-medium">{country.name}</p>
                    <p className="text-sm text-blue-600">{country.localName}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form or Success Message */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            {!isSubmitted ? (
              <>
                <h2 className="text-2xl font-bold mb-6 text-blue-800">Envie sua Mensagem</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">Nome</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block mb-2 font-medium">País de Interesse</label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Selecione um país</option>
                      {countries.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.name} ({country.localName})
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 font-medium">Assunto</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Assunto da mensagem"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">Mensagem</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Digite sua mensagem aqui..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className={`flex items-center justify-center w-full py-3 px-6 rounded-lg text-white font-medium transition-all duration-300 ${
                      isAnimating
                        ? 'bg-yellow-400'
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    {isAnimating ? (
                      <div className="flex items-center">
                        <div className="animate-spin mr-2 h-5 w-5 border-4 border-white border-t-transparent rounded-full"></div>
                        Enviando...
                      </div>
                    ) : (
                      <>
                        <Send className="mr-2" size={18} />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-6 animate-bounce">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <h2 className="text-2xl font-bold text-blue-800 mb-4">Mensagem Enviada!</h2>
                <p className="text-lg mb-8">
                  Obrigado por entrar em contato conosco, {formData.name}! <br />
                  Responderemos ao seu email {formData.email} o mais breve possível.
                </p>
                
                {selectedCountry && (
                  <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                    {selectedCountry && (
                      <p className="font-medium">Seu interesse: {selectedCountry?.name} ({selectedCountry?.localName})</p>
                    )}
                  </div>
                )}
                
                <button
                  onClick={resetForm}
                  className="py-2 px-6 bg-pink-400 text-white rounded-lg hover:bg-pink-500 transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Process Steps */}
        <div className="mt-20 mb-16">
          <h2 className="text-2xl font-bold text-center mb-12 text-blue-800">Como funciona nosso processo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Contato Inicial",
                description: "Preencha o formulário ou entre em contato diretamente conosco",
                icon: (
                  <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Mail className="text-blue-600" size={32} />
                  </div>
                )
              },
              {
                title: "Análise de Pedido",
                description: "Nossa equipe analisa sua solicitação e entra em contato para detalhes",
                icon: (
                  <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                )
              },
              {
                title: "Realização da Compra",
                description: "Realizamos a compra no país de origem e preparamos o envio",
                icon: (
                  <div className="w-16 h-16 mx-auto bg-pink-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                )
              },
              {
                title: "Envio Internacional",
                description: "Enviamos seu produto com rastreamento até o destino final",
                icon: (
                  <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                )
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg hover:-translate-y-2"
              >
                {step.icon}
                <h3 className="text-xl font-semibold text-center mb-3">{step.title}</h3>
                <p className="text-center text-blue-800">{step.description}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-blue-800">Perguntas Frequentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "Quais são os prazos de entrega?",
                answer: "Os prazos variam de acordo com o país de origem e o destino. Normalmente, entre 7 e 21 dias úteis após a confirmação da compra."
              },
              {
                question: "Como funciona o pagamento?",
                answer: "Aceitamos cartões de crédito, transferência bancária e PIX. O valor inclui o produto, taxas internacionais e nosso serviço."
              },
              {
                question: "E se o produto chegar com defeito?",
                answer: "Todos os produtos passam por inspeção antes do envio. Caso ocorra algum problema, nossa política de garantia cobre defeitos por até 30 dias."
              },
              {
                question: "Vocês redirecionam qualquer tipo de produto?",
                answer: "Redirecionamos a maioria dos produtos legais. Algumas restrições se aplicam a itens perecíveis, líquidos e produtos com restrições alfandegárias."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2 text-blue-700">{faq.question}</h3>
                <p className="text-blue-800">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;