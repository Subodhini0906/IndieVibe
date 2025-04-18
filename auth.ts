// lib/auth.ts
import GitHubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/auth/signin", // optional: only if you want a custom signin page
  },
  callbacks: {
    async session({ session }) {
      // you can enrich session object here if needed
      return session;
    },
  },
};
