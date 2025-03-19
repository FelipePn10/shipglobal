"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search as SearchIcon, X } from "lucide-react";

interface SearchItem {
  href: string;
  label: string;
}

interface SearchProps {
  navbarItems: SearchItem[];
  footerItems: SearchItem[];
  lang: string;
}

export function Search({ navbarItems, footerItems, lang }: SearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Filtra os itens com base na query
  useEffect(() => {
    if (query) {
      const allItems = [...navbarItems, ...footerItems];
      const filteredItems = allItems.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredItems);
    } else {
      setResults([]);
    }
  }, [query, navbarItems, footerItems]);

  // Redireciona para a página selecionada
  const handleSearch = (href: string) => {
    router.push(`/${lang}${href}`);
    setIsOpen(false);
    setQuery("");
  };

  return (
    <div className="relative">
      {/* Botão para abrir/fechar a busca */}
      <button
        className="p-2 rounded-full hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <SearchIcon className="h-5 w-5" />}
      </button>

      {/* Modal de busca com animação */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50"
          >
            {/* Campo de entrada */}
            <input
              type="text"
              placeholder="Pesquisar..."
              className="w-full px-4 py-2 rounded-t-md focus:outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />

            {/* Lista de resultados */}
            <div className="max-h-48 overflow-y-auto">
              {results.map((item) => (
                <button
                  key={item.href}
                  className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  onClick={() => handleSearch(item.href)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}