"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TrabalheConosco: React.FC = () => {
  const [currentVacancy, setCurrentVacancy] = useState<string | null>(null);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationCompleted(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const vacancies = [
    {
      id: 'cs-international',
      title: 'Atendimento ao Cliente Internacional',
      department: 'Atendimento',
      location: 'Remoto',
      description: 'Procuramos profissionais fluentes em inglês e/ou espanhol para atender clientes internacionais e auxiliar com dúvidas sobre redirecionamento de compras.',
      requirements: [
        'Fluência em inglês e/ou espanhol',
        'Excelente comunicação',
        'Experiência em atendimento ao cliente',
        'Disponibilidade para trabalhar em horários flexíveis',
      ]
    },
    {
      id: 'logistics-analyst',
      title: 'Analista de Logística Internacional',
      department: 'Operações',
      location: 'Híbrido',
      description: 'Responsável por gerenciar rotas de entrega e otimizar processos logísticos internacionais em nossos 17 países de atuação.',
      requirements: [
        'Formação em Logística ou áreas relacionadas',
        'Experiência em logística internacional',
        'Conhecimento de sistemas de gestão de transporte',
        'Inglês avançado',
      ]
    },
    {
      id: 'frontend-dev',
      title: 'Desenvolvedor Frontend',
      department: 'Tecnologia',
      location: 'Remoto',
      description: 'Buscamos desenvolvedores frontend com experiência em React e TypeScript para aprimorar nossa plataforma de redirecionamento de compras.',
      requirements: [
        'Experiência com React e TypeScript',
        'Conhecimento em Tailwind CSS',
        'Experiência com desenvolvimento de interfaces responsivas',
        'Domínio de ferramentas de versionamento',
      ]
    },
  ];

  const handleVacancyClick = (id: string) => {
    setCurrentVacancy(id === currentVacancy ? null : id);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/world-map-dots.svg')] bg-no-repeat bg-center bg-contain"></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Trabalhe Conosco
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-28"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Junte-se à nossa equipe global e faça parte de uma empresa que conecta pessoas a produtos de todo o mundo
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a href="#vagas" className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition duration-300 inline-block -mb-4">
                Ver Vagas Disponíveis
              </a>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Por que trabalhar conosco?
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🌎",
                title: "Empresa Global",
                description: "Atuamos em 17 países, oferecendo uma experiência verdadeiramente internacional"
              },
              {
                icon: "🚀",
                title: "Crescimento Acelerado",
                description: "Somos uma empresa em constante evolução, com oportunidades de aprendizado e desenvolvimento"
              },
              {
                icon: "💻",
                title: "Trabalho Remoto",
                description: "Flexibilidade para trabalhar de onde você estiver, com horários adaptáveis"
              },
              {
                icon: "🧠",
                title: "Cultura Inovadora",
                description: "Valorizamos ideias criativas e incentivamos a inovação em todos os níveis"
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultura Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative h-96 w-full"
              >
                <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200 rounded-full opacity-70 blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-200 rounded-full opacity-70 blur-2xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200 rounded-full opacity-70 blur-2xl"></div>
                <div className="relative z-10 h-full w-full flex items-center justify-center">
                  <img 
                    src="/team-illustration.svg" 
                    alt="Equipe Diversa" 
                    className="max-w-full max-h-full"
                  />
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 lg:pl-16">
              <motion.h2 
                className="text-3xl font-bold mb-6 text-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Nossa Cultura
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-gray-600 mb-6">
                  Acreditamos que a diversidade cultural é uma de nossas maiores forças. Com colaboradores em diversos países, construímos uma cultura inclusiva e colaborativa que valoriza diferentes perspectivas.
                </p>
                
                <p className="text-gray-600 mb-6">
                  Nossos valores fundamentais incluem:
                </p>
                
                <ul className="space-y-4">
                  {[
                    { title: "Inovação", description: "Buscamos constantemente novas soluções e abordagens" },
                    { title: "Excelência", description: "Comprometimento com a qualidade em tudo o que fazemos" },
                    { title: "Colaboração", description: "Trabalhamos juntos para alcançar objetivos comuns" },
                    { title: "Diversidade", description: "Valorizamos a pluralidade de ideias e experiências" }
                  ].map((value, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm mt-1 mr-3">✓</div>
                      <div>
                        <h4 className="font-semibold text-blue-700">{value.title}</h4>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vagas Section */}
      <section id="vagas" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Vagas Disponíveis
          </motion.h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {vacancies.map((vacancy, index) => (
              <motion.div 
                key={vacancy.id}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => handleVacancyClick(vacancy.id)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-700">{vacancy.title}</h3>
                      <div className="flex items-center mt-2 text-gray-600">
                        <span className="mr-4">{vacancy.department}</span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          {vacancy.location}
                        </span>
                      </div>
                    </div>
                    <div className="text-blue-600">
                      <svg className={`w-6 h-6 transform transition-transform ${currentVacancy === vacancy.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {currentVacancy === vacancy.id && (
                  <motion.div 
                    className="p-6 pt-0 border-t border-gray-200"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <p className="text-gray-700 mb-4">{vacancy.description}</p>
                    
                    <h4 className="font-semibold text-gray-800 mb-2">Requisitos:</h4>
                    <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-1">
                      {vacancy.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                    
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300">
                      Candidatar-se
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo Seletivo Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Nosso Processo Seletivo
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Linha do tempo vertical */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
              
              {/* Etapas do processo */}
              {[
                {
                  title: "Inscrição",
                  description: "Preencha o formulário de candidatura com seus dados e envie seu currículo",
                  icon: "📝"
                },
                {
                  title: "Triagem",
                  description: "Nossa equipe de RH analisa seu perfil e seleciona os candidatos para a próxima fase",
                  icon: "🔍"
                },
                {
                  title: "Entrevista Inicial",
                  description: "Conversa com nosso time de RH para conhecer melhor sua experiência e expectativas",
                  icon: "💬"
                },
                {
                  title: "Teste Técnico",
                  description: "Dependendo da vaga, você pode realizar um teste prático relacionado à função",
                  icon: "💻"
                },
                {
                  title: "Entrevista Final",
                  description: "Conversa com os gestores da área para avaliação final e alinhamento de expectativas",
                  icon: "🤝"
                },
                {
                  title: "Contratação",
                  description: "Bem-vindo à equipe! Iniciamos o processo de integração e onboarding",
                  icon: "🎉"
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16'}`}>
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-blue-400 text-xl">
                    {step.icon}
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            O que nossos colaboradores dizem
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Mariana Silva",
                role: "Analista de Logística",
                photo: "/profile-placeholder.jpg",
                quote: "Trabalhar em uma empresa com presença global me proporciona uma visão ampla do mercado e contato com diversas culturas. É um aprendizado constante!",
                country: "Brasil"
              },
              {
                name: "Carlos Mendoza",
                role: "Atendimento ao Cliente",
                photo: "/profile-placeholder.jpg",
                quote: "A flexibilidade do trabalho remoto me permite equilibrar minha vida pessoal e profissional. A empresa valoriza muito a qualidade de vida dos colaboradores.",
                country: "México"
              },
              {
                name: "Julia Chen",
                role: "Desenvolvedora Frontend",
                photo: "/profile-placeholder.jpg",
                quote: "O ambiente de trabalho é extremamente inovador e colaborativo. Temos liberdade para propor ideias e contribuir com o crescimento da plataforma.",
                country: "EUA"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-700">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role} • {testimonial.country}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Pronto para fazer parte do nosso time?
          </motion.h2>
          
          <motion.p 
            className="text-xl mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Estamos sempre em busca de talentos para crescer juntos. Junte-se a nós e faça parte de uma empresa global em constante evolução.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a href="#vagas" className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition duration-300 inline-block">
              Ver Vagas Disponíveis
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Perguntas Frequentes
          </motion.h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Como funciona o processo de trabalho remoto?",
                answer: "Oferecemos flexibilidade para trabalhar de qualquer lugar, com ferramentas de colaboração online e reuniões virtuais. Dependendo da posição, podemos ter algumas reuniões presenciais ou regime híbrido."
              },
              {
                question: "Quais são os benefícios oferecidos?",
                answer: "Oferecemos pacote competitivo de benefícios que inclui plano de saúde, auxílio home office, horário flexível, oportunidades de desenvolvimento profissional e programa de participação nos resultados."
              },
              {
                question: "Há oportunidades de crescimento na empresa?",
                answer: "Sim! Valorizamos o desenvolvimento interno e oferecemos planos de carreira estruturados. Realizamos avaliações de desempenho periódicas e incentivamos a capacitação contínua."
              },
              {
                question: "Como é o processo de integração para novos colaboradores?",
                answer: "Temos um programa de onboarding estruturado que inclui treinamentos sobre nossa cultura, produtos e processos. Cada novo colaborador recebe um mentor para auxiliar nos primeiros meses."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer">
                    <h3 className="text-lg font-semibold text-blue-700">{faq.question}</h3>
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Ficou com dúvidas?
          </motion.h2>
          
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="bg-white rounded-xl shadow-md p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <form>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nome</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Assunto</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Assunto da mensagem"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensagem</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Sua mensagem..."
                    ></textarea>
                  </div>
                  
                  <div className="md:col-span-2 text-center">
                    <button 
                      type="submit" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition duration-300"
                    >
                      Enviar Mensagem
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
            
            <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">Ou entre em contato diretamente pelo email:</p>
                <a 
                href="mailto:carreiras@empresa.com" 
                className="text-blue-600 hover:text-blue-800 font-medium transition duration-300"
                >
               carreiras@empresa.com
             </a>
            </div>
         </div>
        </div>
      </section>
    </div>
  );
};

export default TrabalheConosco;