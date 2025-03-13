"use client";
import React from "react";
import { motion } from "framer-motion";
import { Disclosure } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "../data/faq";
import { fadeIn, staggerContainer, slideIn, scaleIn } from "./animations";

const FAQ = () => {
  return (
    <motion.section
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      }}
    >
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-16"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" } 
            }
          }}
        >
          Perguntas Frequentes
        </motion.h2>
        {/* Lista de FAQs */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="bg-blue-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <Disclosure as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none">
                      <h3 className="text-lg font-semibold text-blue-800">{faq.question}</h3>
                      <motion.div
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-blue-600" />
                      </motion.div>
                    </Disclosure.Button>
                    <Disclosure.Panel>
                      <div className="px-6 pb-4 text-gray-700">
                        <p>{faq.answer}</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQ;