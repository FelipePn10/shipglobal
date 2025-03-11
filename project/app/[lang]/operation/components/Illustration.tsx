import React from 'react';
import { motion } from 'framer-motion';
import { countries } from '../data/countries';

interface IllustrationProps {
  currentStep: number;
}

export const Illustration: React.FC<IllustrationProps> = ({ currentStep }) => {
  const renderIllustration = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-md"
          >
            <svg className="w-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="50" width="300" height="200" fill="#e6f7ff" rx="15" />
              <circle cx="200" cy="150" r="70" fill="#1a365d" opacity="0.1" />
              <path
                d="M120,140 Q150,120 180,140 Q210,160 240,140 Q270,120 300,140"
                stroke="#3b82f6"
                strokeWidth="3"
                fill="none"
              />
              {countries.slice(0, 8).map((_, idx) => (
                <motion.circle
                  key={idx}
                  cx={120 + idx * 25}
                  cy={140 + (idx % 2 === 0 ? -10 : 10)}
                  r="4"
                  fill="#3b82f6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 * idx, duration: 0.3 }}
                />
              ))}
              <motion.circle
                cx="180"
                cy="130"
                r="12"
                fill="#fef3c7"
                stroke="#3b82f6"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ delay: 0.8, duration: 0.5 }}
              />
              <motion.g
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <circle cx="200" cy="220" r="15" fill="#f472b6" />
                <path d="M190,220 L210,220" stroke="white" strokeWidth="2" />
                <path d="M200,210 L200,230" stroke="white" strokeWidth="2" />
              </motion.g>
            </svg>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-md"
          >
            <svg className="w-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="40" width="300" height="220" fill="#f5f3ff" rx="15" />
              <rect x="100" y="70" width="200" height="150" fill="white" stroke="#c4b5fd" strokeWidth="2" rx="5" />
              <rect x="100" y="70" width="200" height="20" fill="#c4b5fd" rx="5 5 0 0" />
              <circle cx="110" cy="80" r="3" fill="white" />
              <circle cx="120" cy="80" r="3" fill="white" />
              <circle cx="130" cy="80" r="3" fill="white" />
              <rect x="120" y="110" width="160" height="80" fill="#e0e7ff" rx="5" />
              <rect x="140" y="140" width="120" height="30" fill="#818cf8" rx="3" />
              <motion.path
                d="M300,150 C350,150 350,220 250,220"
                stroke="#c4b5fd"
                strokeWidth="3"
                strokeDasharray="5,5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <rect x="190" y="200" width="120" height="60" fill="#f472b6" fillOpacity="0.2" stroke="#f472b6" strokeWidth="2" rx="10" />
              <motion.text
                x="225"
                y="235"
                fontFamily="Arial"
                fontSize="12"
                fill="#4a5568"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                Plataforma
              </motion.text>
            </svg>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-md"
          >
            <svg className="w-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="40" width="300" height="220" fill="#fffbeb" rx="15" />
              <motion.g
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <rect x="120" y="70" width="160" height="180" fill="white" stroke="#fbbf24" strokeWidth="2" rx="5" />
                <rect x="120" y="70" width="160" height="30" fill="#fbbf24" fillOpacity="0.2" rx="5 5 0 0" />
                <text x="160" y="90" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#92400e">Orçamento</text>
                <rect x="135" y="115" width="130" height="8" rx="4" fill="#e5e7eb" />
                <rect x="135" y="135" width="130" height="8" rx="4" fill="#e5e7eb" />
                <rect x="135" y="155" width="130" height="8" rx="4" fill="#e5e7eb" />
                <rect x="135" y="175" width="70" height="8" rx="4" fill="#e5e7eb" />
                <rect x="135" y="200" width="130" height="20" rx="4" fill="#fef3c7" />
                <motion.text
                  x="170"
                  y="215"
                  fontFamily="Arial"
                  fontSize="14"
                  fontWeight="bold"
                  fill="#92400e"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  Total: R$ 350
                </motion.text>
              </motion.g>
              <motion.g animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
                <circle cx="310" cy="80" r="20" fill="#fef3c7" stroke="#fbbf24" strokeWidth="2" />
                <line x1="310" y1="80" x2="310" y2="65" stroke="#92400e" strokeWidth="2" />
                <line x1="310" y1="80" x2="320" y2="80" stroke="#92400e" strokeWidth="2" />
              </motion.g>
            </svg>
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-md"
          >
            <svg className="w-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="40" width="300" height="220" fill="#fdf2f8" rx="15" />
              <motion.g
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <rect x="120" y="100" width="160" height="100" rx="10" fill="#f472b6" />
                <rect x="140" y="130" width="120" height="20" rx="3" fill="#fdf2f8" fillOpacity="0.7" />
                <rect x="140" y="160" width="40" height="20" rx="3" fill="#fdf2f8" fillOpacity="0.7" />
              </motion.g>
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <circle cx="300" cy="150" r="25" fill="#c7d2fe" />
                <path d="M285,150 L295,160 L315,140" stroke="#4f46e5" strokeWidth="4" fill="none" />
              </motion.g>
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <circle cx="100" cy="220" r="15" fill="#fdf2f8" stroke="#f472b6" strokeWidth="2" />
                <path d="M100,215 L100,225 M95,220 L105,220" stroke="#f472b6" strokeWidth="2" />
              </motion.g>
            </svg>
          </motion.div>
        );
      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-md"
          >
            <svg className="w-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="40" width="300" height="220" fill="#e0f2fe" rx="15" />
              <motion.g
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <rect x="150" y="70" width="100" height="70" fill="#7dd3fc" rx="5" />
                <rect x="170" y="80" width="60" height="50" fill="#0ea5e9" rx="3" />
                <path d="M150,70 L200,50 L250,70" fill="#7dd3fc" stroke="#0ea5e9" strokeWidth="1" />
              </motion.g>
              <motion.path
                d="M200,140 C200,180 150,200 110,200 C70,200 60,240 110,240"
                stroke="#0ea5e9"
                strokeWidth="3"
                strokeDasharray="7,7"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5 }}
              />
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <rect x="90" y="220" width="40" height="30" fill="#93c5fd" />
                <path d="M80,220 L110,190 L140,220" fill="#3b82f6" stroke="#1e40af" strokeWidth="1" />
                <rect x="105" y="230" width="10" height="20" fill="#1e40af" />
              </motion.g>
              <motion.g
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
              >
                <circle cx="160" cy="235" r="10" fill="#bae6fd" />
                <path d="M160,245 L160,265" stroke="#bae6fd" strokeWidth="3" />
                <path d="M145,255 L160,250 L175,255" stroke="#bae6fd" strokeWidth="3" fill="none" />
              </motion.g>
            </svg>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return <div className="order-1 md:order-2 flex items-center justify-center">{renderIllustration()}</div>;
};