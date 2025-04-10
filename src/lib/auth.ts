import GithubProvider from "next-auth/providers/github";
import { env } from "./env";
import { AuthOptions, getServerSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./prisma";
export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
      profile(profile){
        return {
        id:profile.id.toString(),
        name:profile.name,
        email : profile.email,
        username:profile.login,
        }
      }
    }),
    // ...add more providers here
  ],
  callbacks: {
    session({ session, user }) {
      if (!session?.user) {
        return session
      }
    session.user.id = user.id;
      return session;
    },
  },
};

export const getAuthSession = async () => {
  const session = await getServerSession(authOptions);
  return session;
};
