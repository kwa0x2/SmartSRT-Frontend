import NextAuth, { User as NextAuthUser } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { cookies } from "next/headers";
import { AuthType, PlanType } from "@/types";
import { getLoggedInUserServer } from "@/app/api/services/user-server.service";

interface User extends NextAuthUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  image: string;
  auth_type: AuthType;
  plan: PlanType;
  usage_limit: number; 

  error: string
}

declare module "next-auth" {
  interface Session {
    user: User;
  }
  interface User {
    phone: string;
    auth_type: AuthType;
    plan: PlanType;
    usage_limit: number; 
    error: string
  }
}

// @ts-ignore
declare module "next-auth/jwt" {
  interface JWT {
    phone?: string;
    auth_type?: AuthType;
    plan?: PlanType;
    usage_limit?: number;
    error?: string;
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  events: {
    signOut() {
      const cookieStore = cookies();
      cookieStore.delete(process.env.COOKIE_NAME as string);
      cookieStore.delete("next-auth.session-token");
    }
  },
  callbacks: {
    async session({ token, session }) {
      if (session.user) {
        session.user.id = token.sub as string;
        session.user.phone = token.phone as string;
        session.user.image = token.picture as string;
        session.user.auth_type = token.auth_type as AuthType;
        session.user.plan = token.plan as PlanType;
        session.user.usage_limit = token.usage_limit as number;
        session.user.error = token.error as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if(user) {
        token.phone = user.phone;
        token.auth_type = user.auth_type;
        token.plan = user.plan;
        token.usage_limit = user.usage_limit;
        token.error = user.error;
      }

      if (!token.sub) return token;

      try {
        const existingUser = await getLoggedInUserServer();

        if (!existingUser.user.Email) {
          return {
            ...token,
            error: "invalid-session",
          };
        }

        if (existingUser && existingUser.user.PhoneNumber && existingUser.user.Plan) {
          token.sub = existingUser.user.ID
          token.phone = existingUser.user.PhoneNumber;
          token.plan = existingUser.user.Plan;
          token.usage_limit = existingUser.usage_limit;
        }

        return token;
      } catch (error) {
        return token;
      }
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 259200, // 3 day
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        return {
          id: credentials.id as string,
          name: credentials.name as string,
          email: credentials.email as string,
          phone: credentials.phone as string,
          image: credentials.avatar as string,
          auth_type: credentials.auth_type as AuthType,
          plan: credentials.plan as PlanType,
          error: '' as string,
          usage_limit: credentials.usage_limit as number, 
        };
      },
    }),
  ],
});