import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import User from "@/models/User"
import Payment from "@/models/Payment"
import { signIn } from "next-auth/react"
import mongoose from "mongoose"

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github") {
        // Connect to the database
        await mongoose.connect("mongodb://localhost:27017/dosa")
        // check if user already exists
        // const currentUser = await client.db("users").collection("users").findOne({email:email})
        const currentUser = await User.findOne({ email: user.email })
        if (!currentUser) {
          const newUser = new User({
            email: user.email,
            username:user.email.split("@")[0]


          })
          await newUser.save()
        }
        return true
      }
    },
    async session({ session }) {
      await mongoose.connect("mongodb://localhost:27017/dosa")
      const dbUser = await User.findOne({ email: session.user.email })
      session.user.name = dbUser.username
      return session
    },
  }

}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }