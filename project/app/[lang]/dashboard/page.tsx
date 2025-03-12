import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';
import DashboardClient from './DashboardClient';


const prisma = new PrismaClient();

export default async function DashboardPage({ params }: { params: { lang: string } }) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect(`/${params.lang}/auth`);
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email! },
    include: { address: true },
  });

  if (!user) {
    return <div>Usuário não encontrado</div>;
  }

  const userData = {
    name: user.name || 'Usuário',
    email: user.email,
    suite: 'SGL' + user.id.toString().padStart(4, '0'), // Exemplo: SGL0001
    address: user.address
      ? {
          street: user.address.street,
          city: user.address.city,
          state: user.address.state,
          country: user.address.country,
          postalCode: user.address.postalCode, 
        }
      : { street: '', city: '', state: '', country: '', postalCode: '' },
    stats: {
      products: 0,
      packages: 0,
      services: 0,
      shipments: 0,
    },
  };

  // Passamos os dados para o Client Component
  return <DashboardClient initialUserData={userData} lang={params.lang} />;
}