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

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string }; // Tipo síncrono para Server Component
}) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar params={Promise.resolve(params)} /> {/* Envolve params em Promise.resolve */}
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}