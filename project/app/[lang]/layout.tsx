import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShipGlobal - Seu Redirecionamento Internacional",
  description:
    "Compre em qualquer lugar do mundo e receba no Brasil. Serviço completo de redirecionamento com endereços em 17 países.",
  keywords:
    "redirecionamento internacional, compras internacionais, personal shopper, consolidação de pacotes",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = params.lang;

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar lang={lang} />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}