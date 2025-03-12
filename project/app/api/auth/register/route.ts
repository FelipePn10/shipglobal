import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email, password, name, phone, nationality, address } = await req.json();

    if (!email || !password || !nationality) {
      return NextResponse.json({ error: 'Campos obrigatórios ausentes' }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: 'Email já em uso' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        name: name || null,
        password: hashedPassword,
        nationality,
        phone: phone || null,
        emailVerified: new Date(),
        address: address
          ? {
              create: {
                street: address,
                city: 'Unknown',
                state: 'Unknown',
                country: nationality,
                postalCode: '00000',
              },
            }
          : undefined,
      },
    });

    return NextResponse.json({ message: 'Usuário criado com sucesso', user }, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return NextResponse.json({ error: 'Erro ao criar usuário' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}