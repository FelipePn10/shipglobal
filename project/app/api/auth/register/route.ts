import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { email, name, password } = await request.json();

    // Verifique se todos os campos foram fornecidos
    if (!email || !name || !password) {
      return NextResponse.json(
        { error: 'Email, name e password são obrigatórios.' },
        { status: 400 }
      );
    }

    // Verifique se o usuário já existe
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Um usuário com este email já existe.' },
        { status: 400 }
      );
    }

    // Criptografe a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crie o novo usuário
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        nationality: 'unknown', // or any default value
      },
    });

    // Retorne o usuário criado (sem a senha)
    const { password: _, ...userWithoutPassword } = newUser;

    return NextResponse.json(
      { user: userWithoutPassword },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor.' },
      { status: 500 }
    );
  }
}