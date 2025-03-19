"use client";

import { useState } from "react";
import { useTranslation } from "next-i18next";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const { t } = useTranslation("footer");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

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

      setMessage({ type: "success", text: t("newsletter.successMessage") });
      setEmail(""); // Limpa o campo de e-mail após a inscrição
    } catch (error) {
      setMessage({ type: "error", text: (error as Error).message || t("newsletter.errorMessage") });
    } finally {
      setLoading(false);
    }
  };

  return (
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
        {message && (
          <p
            className={`mt-4 text-center ${
              message.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
}