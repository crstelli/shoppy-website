import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createCustomer, getCustomer } from "../(services)/apiCustomers";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
      try {
        if (user.email && user.name) {
          const existingUser = await getCustomer(user.email);
          if (!existingUser) await createCustomer(user.email, user.name);

          return true;
        }
        return false;
      } catch {
        return false;
      }
    },
  },
});
