import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { I18nProvider } from "@/hooks/i18n-client-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShipGlobal - Seu Redirecionamento Internacional",
  description:
    "Compre em qualquer lugar do mundo e receba no Brasil. Serviço completo de redirecionamento com endereços em 17 países.",
  keywords:
    "redirecionamento internacional, compras internacionais, personal shopper, consolidação de pacotes",
};

// Defina os idiomas suportados
export async function generateStaticParams() {
  return [{ lang: "pt" }, { lang: "en" }, { lang: "es" }];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = params.lang || "pt";
  
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.className}>
        <I18nProvider locale={lang}>
          <Navbar lang={lang} />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </I18nProvider>
      </body>
    </html>
  );
}