import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          if (!credentials?.username || !credentials.password) {
            return null;
          }

          const res2 = {
            result: "ok",
            user: {
              id: "1",
              email: "email",
              name: "John bat",
              token: "sasoaks",
            },
          };

          if (res2.result === "ok") {
            return {
              id: res2.user.id,
              email: res2.user.email,
              name: res2.user.name,
              token: res2.user.token,
            };
          }

          return null;
        } catch (error: any) {
          return null;
        }
      },
    }),
  ],
  secret: "b758b70cc3a5864ad92d09e37aba6924",
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: "b758b70cc3a5864ad92d09e37aba6924",
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },
  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) { return true },
    // async redirect({ url, baseUrl }) { return baseUrl },
    async session({ session, token, user }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
  // Enable debug messages in the console if you are having problems
  debug: true,
});
