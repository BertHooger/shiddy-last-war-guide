// File: src/lib/auth.ts

import { NextAuthOptions, DefaultSession, User, Session } from "next-auth"
import { JWT } from "next-auth/jwt"
import CredentialsProvider from "next-auth/providers/credentials"

declare module "next-auth" {
    interface Session extends DefaultSession {
        user?: {
            id: string;
            role: string;
        } & DefaultSession["user"]
    }

    interface User {
        role: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        role?: string;
    }
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) {
                    throw new Error("Missing username or password")
                }
                if (credentials.username === process.env.ADMIN_USERNAME &&
                    credentials.password === process.env.ADMIN_PASSWORD) {
                    return { id: "1", name: "Admin", email: "admin@example.com", role: "admin" }
                }
                throw new Error("Invalid username or password")
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }: { token: JWT; user: User | undefined }) {
            if (user) {
                token.role = user.role
            }
            return token
        },
        async session({ session, token }: { session: DefaultSession; token: JWT }): Promise<Session> {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.sub ?? '',
                    role: token.role as string ?? '',
                }
            }
        }
    },
    pages: {
        signIn: '/admin/login',
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60,
    },
}