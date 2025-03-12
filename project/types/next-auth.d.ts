import { DefaultSession, DefaultJWT } from 'next-auth';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
      email: string;
      name?: string | null;
    };
  }

  interface JWT extends DefaultJWT {
    email?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    email?: string;
  }
}