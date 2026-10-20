import connectDB from "@/lib/db";
import User from "@/models/user.model";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Enter Your Email", type: "text" },
        password: { label: "Enter Your password", type: "password" },
        // role: { label: "Role", type: "text" }, // optional
      },
      async authorize(credentials) {
        await connectDB();

        const user = await User.findOne({
          email: credentials?.email,
        });
        // console.log("user", user);

        if (!user) throw new Error("Invalid Email or Password");

        // const isValid = await bcrypt.compare(
        //   credentials!.password,
        //   user.password,
        // );

        // if (!isValid) throw new Error("Invalid Email or Password");

        // Optional role check (UI guard)
        // if (credentials?.role && user.role !== credentials.role) {
        //   throw new Error("Role is not correct");
        // }

        return {
          id: user._id.toString(), // ✅ FIXED
          name: user.userName,
          email: user.email,
          //   role: user.role,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log("JWT CALLBACK");
      console.log("USER:", user);
      console.log("TOKEN:", token);

      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = (user as any).role;
      }

      console.log("UPDATED TOKEN:", token);

      return token;
    },

    async session({ session, token }) {
      console.log("SESSION CALLBACK");
      console.log("SESSION BEFORE:", session);
      console.log("TOKEN:", token);

      if (session.user) {
        (session.user as any).id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        (session.user as any).role = token.role;
      }

      console.log("SESSION AFTER:", session);

      return session;
    },
  },
});

export { handler as GET, handler as POST };
