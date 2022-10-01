import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import * as mongoI from "../../../server/mongo-interface"

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (account.provider === "google") {
                let authorized = await mongoI.findOne("authorized-users" , {id:"authorized-users"})
                return profile.email_verified && authorized.emails.indexOf(profile.email) !== -1
            }
        },
    },
    session: {
        strategy: "database",
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60, // 24 hours
    },
    adapter: MongoDBAdapter(mongoI.connect(), {
        databaseName: 'RecipeProject'
    }),
}
export default NextAuth(authOptions)