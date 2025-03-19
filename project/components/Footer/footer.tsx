"use client";

import Link from "next/link";
import { Package, Twitter, Instagram, Linkedin, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import toast from "react-hot-toast";

export function Footer() {
  const { t } = useTranslation("footer");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const footerSections = [
    {
      title: t("about.title"),
      links: [
        { label: t("about.links.aboutUs"), href: "/about" },
        { label: t("about.links.howItWorks"), href: "/explanation" },
        { label: t("about.links.reviews"), href: "/avaliacoes" },
        { label: t("about.links.jobs"), href: "/workus" },
      ],
    },
    {
      title: t("services.title"),
      links: [
        { label: t("services.links.personalShopper"), href: "/personalshopper" },
        { label: t("services.links.consolidation"), href: "/consolidation" },
        { label: t("services.links.repackaging"), href: "/servicos/reembalagem" },
        { label: t("services.links.returns"), href: "/returns" },
      ],
    },
    {
      title: t("support.title"),
      links: [
        { label: t("support.links.faq"), href: "/questions" },
        { label: t("support.links.contact"), href: "/contact" },
        { label: t("support.links.hours"), href: "/hours" },
      ],
    },
    {
      title: t("legal.title"),
      links: [
        { label: t("legal.links.terms"), href: "/termos" },
        { label: t("legal.links.privacy"), href: "/privacidade" },
        { label: t("legal.links.cookies"), href: "/cookies" },
        { label: t("legal.links.lgpd"), href: "/lgpd" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Twitter size={20} />, href: "#", label: t("socialLinks.twitter") },
    { icon: <Instagram size={20} />, href: "#", label: t("socialLinks.instagram") },
    { icon: <Linkedin size={20} />, href: "#", label: t("socialLinks.linkedin") },
    { icon: <Facebook size={20} />, href: "#", label: t("socialLinks.facebook") },
  ];

  const contactInfo = [
    { icon: <Mail size={16} />, text: t("contact.email") },
    { icon: <Phone size={16} />, text: t("contact.phone") },
    { icon: <MapPin size={16} />, text: t("contact.address") },
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao se inscrever na newsletter");
      }

      // Notificação de sucesso
      toast.success(t("newsletter.successMessage"));
      setEmail(""); // Limpa o campo de e-mail após a inscrição
    } catch (error: any) {
      // Notificação de erro
      toast.error(error.message || t("newsletter.errorMessage"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-900 text-white">
      {/* Newsletter Section */}
      <div className="w-full bg-blue-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold">{t("newsletter.title")}</h3>
              <p className="text-blue-100 mt-1">{t("newsletter.subtitle")}</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder={t("newsletter.placeholder")}
                className="px-4 py-2 rounded-l-md w-full md:w-64 text-gray-900 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                variant="default"
                className="rounded-l-none bg-blue-900 hover:bg-blue-800"
                disabled={loading}
              >
                {loading ? t("newsletter.loading") : t("newsletter.button")}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Contact Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Package className="h-8 w-8 text-white" />
              <span className="font-bold text-white text-2xl">{t("brandName")}</span>
            </div>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 text-blue-100">
                  <span className="text-white">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nav Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-blue-100 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 opacity-30" />

        {/* Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-blue-100 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {t("copyright")}
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                aria-label={social.label}
                className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors duration-200"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}