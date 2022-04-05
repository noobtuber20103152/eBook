import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: "282485375455-mrc6llbjbvmj2sjq3tcftrp6r72p343t.apps.googleusercontent.com",
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