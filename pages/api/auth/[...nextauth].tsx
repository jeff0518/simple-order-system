import NextAuth, { Awaitable, NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "@/services/db";
import { verifyPassword } from "@/services/auth";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      // credentials: {
      //   account: { label: "Account", type: "text" },
      //   password: { label: "Password", type: "password" },
      // },
      authorize: async (credentials) => {
        const client = await connectToDatabase();
        const accountCollection = client.db().collection("user");
        const account = await accountCollection.findOne({
          account: credentials!.account,
        });
        console.log(account);
        if (!account) {
          client.close();
          throw new Error("沒有找到帳號");
        }

        const isValid = await verifyPassword(
          credentials!.password,
          account.password
        );

        if (!isValid) {
          client.close();
          throw new Error("無法讓您登入！");
        }

        client.close();
        return { account: account.account } as unknown as Awaitable<User>;
      },
      credentials: {
        account: {},
        password: {},
      },
    }),
  ],
};

export default NextAuth(authOptions);
