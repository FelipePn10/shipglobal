import { NextResponse } from "next/server";

const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY || "";
const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID || "";

export async function POST(request: Request) {
  const { email } = await request.json();

  // Validação básica do e-mail
  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { error: "E-mail inválido" },
      { status: 400 }
    );
  }

  try {
    // Envia o e-mail para o MailerLite
    const response = await fetch(
      `https://api.mailerlite.com/api/v2/groups/${MAILERLITE_GROUP_ID}/subscribers`,
      {
        method: "POST",
        headers: {
          "X-MailerLite-ApiKey": MAILERLITE_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "Erro ao se inscrever na newsletter");
    }

    return NextResponse.json(
      { message: "Inscrição realizada com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro:", error);
    return NextResponse.json(
      { error: "Erro ao processar a inscrição, tente mais tarde! Desculpe por isso." },
      { status: 500 }
    );
  }
}

