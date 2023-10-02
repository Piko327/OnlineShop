import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  //   FacebookProvider({
  //     clientId: process.env.FACEBOOK_CLIENT_ID,
  //     clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  //   }),
  //   GitHubProvider({
  //     clientId: process.env.GITHUB_ID,
  //     clientSecret: process.env.GITHUB_SECRET
  //   })
   ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return "https://online-shop-mu-three.vercel.app/";
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };