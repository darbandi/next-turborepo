import jwt from 'jsonwebtoken';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { compare } from 'bcrypt';
import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env['GOOGLE_CLIENT_ID'],
			clientSecret: process.env['GOOGLE_CLIENT_SECRET']
		}),
		CredentialsProvider({
			name: 'credentials',
			credentials: {},
			async authorize(credentials) {
				await dbConnect();
				const { email, password } = credentials as {
					email: string;
					password: string;
				};
				const user = await User.findOne({ email }).lean();
				const isPasswordMatched = await compare(password, user.password);
				if (user && isPasswordMatched) {
					return {
						id: user._id.toString(),
						name: user.userName,
						email: user.email
					};
				}
				throw new Error('Invalid Credentials');
			}
		})
	],
	session: {
		strategy: 'jwt',
		maxAge: 30 * 24 * 60 * 60, // 30 days
		updateAge: 24 * 60 * 60 // 24 hours
	},
	secret: process.env['NEXTAUTH_SECRET'],
	jwt: {
		async encode({ secret, token }) {
			return jwt.sign(token, secret);
		},
		async decode({ secret, token }) {
			return jwt.verify(token, secret);
		}
	},
	pages: {
		signIn: '/auth/login'
	},
	callbacks: {
		async jwt({ token, user, account }) {
			if (account) {
				token.accessToken = account.access_token;
				token.user = user;
			}
			return token;
		},
		async session({ session, token }) {
			return { ...session, user: token.user };
		}
	}
};
export default NextAuth(authOptions);
