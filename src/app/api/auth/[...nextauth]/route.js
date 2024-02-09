import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Email and Password",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Your Email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const res = await fetch("http://localhost/sanctum/csrf-cookie", {
                    method: "GET",
                })
                const setCookieHeader = res.headers.get("set-cookie")
                const cookies = setCookieHeader?.split(", ")

                let sessionKey = null
                let xsrfToken = null
            }

        })
    ]
}