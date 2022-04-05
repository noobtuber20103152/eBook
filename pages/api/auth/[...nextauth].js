import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: "282485375455-eqjfc70ibd4evpin00f9jrpvo7r2qthf.apps.googleusercontent.com",
            clientSecret: "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",
            authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
        })
    ],
    jwt: {
        encryption: true
    },
    secret: "secret token",
    callbacks: {
        async jwt(token, account) {
            if (account?.accessToken) {
                token.accessToken = account.accessToken
            }
            return token;
        },
        redirect: async (url, _baseUrl) => {
            if (url === '/user') {
                return Promise.resolve('/')
            }
            return Promise.resolve('/')
        }
    }
});