import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

// Importar tipos do NextAuth
import { Session, JWT } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';

// Definir a interface para o usuário retornado pelo Prisma, compatível com AdapterUser
interface User {
  id: number;
  email: string;
  name?: string | null;
  password: string;
  nationality: string;
  phone?: string | null; 
  emailVerified?: Date | null;
}

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        }) as User | null;

        if (!user) return null;

        const isValid = await bcrypt.compare(credentials?.password || '', user.password);
        if (isValid) {
          return { id: user.id.toString(), email: user.email, name: user.name, emailVerified: user.emailVerified };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/[lang]/auth',
  },
  callbacks: {
    async session({
      session,
      token,
      user,
      newSession,
      trigger,
    }: {
      session: Session;
      token: JWT;
      user?: AdapterUser;
      newSession?: any;
      trigger?: string;
    }) {
      if (token?.email && session.user) {
        session.user.email = token.email;
      }
      return session;
    },
    async jwt({
      token,
      user,
      account,
      profile,
      isNewUser,
      trigger,
      session,
    }: {
      token: JWT;
      user?: User | AdapterUser;
      account?: any;
      profile?: any;
      isNewUser?: boolean;
      trigger?: 'signIn' | 'signUp' | 'update';
      session?: any;
    }) {
      if (user) {
        token.email = 'email' in user ? user.email : (user as User).email;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);