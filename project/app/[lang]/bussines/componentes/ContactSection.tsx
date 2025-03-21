import React from "react";
import { Contact } from "../types/contentTypes";

interface ContactSectionProps {
  contact: Contact;
}

const ContactSection: React.FC<ContactSectionProps> = ({ contact }) => {
  return (
    <section className="mb-16 text-center bg-blue-50 p-8 rounded-lg">
      <h2 className="text-3xl font-semibold mb-4">{contact.title}</h2>
      <p className="text-lg mb-6">{contact.description}</p>
      <a
        href="#contact-sales"
        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
      >
        {contact.cta}
      </a>
    </section>
  );
};

export default ContactSection;