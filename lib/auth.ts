import { getLoggedInUserServer } from "@/app/api/services/user.service";
import NextAuth, { User as NextAuthUser } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { cookies } from "next/headers";
import { authType, userRole } from "./type";

interface User extends NextAuthUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  image: string;
  auth_type: authType;
  role: userRole;
  error: string
}

declare module "next-auth" {
  interface Session {
    user: User;
  }
  interface User {
    phone: string;
    auth_type: authType;
    role: userRole;
    error: string
  }
}

// @ts-ignore
declare module "next-auth/jwt" {
  interface JWT {
    phone?: string;
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  events: {
    signOut() {
      const cookieStore = cookies();
  
      cookieStore.delete("sid");
      cookieStore.delete("next-auth.session-token");
    }
  },
  callbacks: {
    async session({ token, session }) {
      if (session.user) {
        session.user.phone = token.phone as string;
        session.user.image = token.picture as string;
        session.user.auth_type = token.auth_type as authType;
        session.user.role = token.role as userRole
        session.user.error = token.error as userRole

      }
      return session;
    },
    async jwt({ token, user }) {
      if(user){
        token.phone = user.phone;
        token.auth_type = user.auth_type;
        token.role = user.role
        token.error = user.error
      }
      
      if (!token.sub) return token;

      const existingUser = await getLoggedInUserServer();
      if (!existingUser.Email) {
        return {
          ...token,
          error: "invalid-version",
        }
        // return null;
      }


      if (existingUser && existingUser.PhoneNumber && existingUser.AvatarURL) {
        token.phone = existingUser.PhoneNumber;
        token.picture = existingUser.AvatarURL;
      }

      return token;
    },
  },
  session: { 
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hour
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
          auth_type: credentials.auth_type as authType,
          role: credentials.role as userRole,
          error: '' as string
        };
      },
    }),
  ],
});
