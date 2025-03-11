import React from 'react';
import { Send } from 'lucide-react';
import { Country } from '../data/countries';

interface ContactFormProps {
  formData: {
    name: string;
    email: string;
    country: string;
    subject: string;
    message: string;
  };
  selectedCountry: { code: string; name: string; localName: string } | null;
  isSubmitted: boolean;
  isAnimating: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  resetForm: () => void;
  countries: Country[];
}

export const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  selectedCountry,
  isSubmitted,
  isAnimating,
  handleChange,
  handleSubmit,
  resetForm,
  countries,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      {!isSubmitted ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-blue-800">Envie sua Mensagem</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Nome
              </label>
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
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
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
              <label htmlFor="country" className="block mb-2 font-medium">
                País de Interesse
              </label>
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
              <label htmlFor="subject" className="block mb-2 font-medium">
                Assunto
              </label>
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
              <label htmlFor="message" className="block mb-2 font-medium">
                Mensagem
              </label>
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
                isAnimating ? 'bg-yellow-400' : 'bg-blue-600 hover:bg-blue-700'
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
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
                <p className="font-medium">Seu interesse: {selectedCountry.name} ({selectedCountry.localName})</p>
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
  );
};