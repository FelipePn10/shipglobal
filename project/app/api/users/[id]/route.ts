import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const { name, nationality } = await req.json();

    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        name,
        nationality,
      },
    });

    return NextResponse.json({ message: 'Usuário atualizado com sucesso', user }, { status: 200 });
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    return NextResponse.json({ error: 'Erro ao atualizar usuário' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}