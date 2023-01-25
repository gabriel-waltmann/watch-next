import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials'
import { v4 as uuidv4 } from 'uuid';

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "E-mail", type: "text", placeholder: "Digite seu Email" },
                password: { label: "Password", type: "password", placeholder: "Digite sua senha" }
            },
            async authorize(credentials: any) {
                let user = { 
                    id: uuidv4(), 
                    credentials
                    }
                return user
            }
        })
    ],
    callbacks: {
        jwt: ({ token, user }) => {
            if (user) { token.id = user.id }
            return token;
        },
        session: ({ session, token }: any) => {
            if (token)  {session.id = token.id};
            return session;
        },
    },
    secret: 'd5dccca540c42789ea914b2d41b6f08',
    jwt: { },
    pages: {
        signIn: '/Entrar/',
        newUser: '/Registrar/'
    }
})