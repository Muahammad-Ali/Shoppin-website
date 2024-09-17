import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import {db} from "./db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session:{
        strategy: 'jwt'
    },
    pages:{
        signIn: "/sign-in",
      },
    
    providers: [
        CredentialsProvider({
          
          name: "Credentials",
         
          credentials: {
            email: { label: "Email", type: "email", placeholder: "example@mail.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, _req) {
            if(!credentials?.email || !credentials?.password) {
              console.log("Missing credentials");
              return null;
            }
          
            const existingUser = await db.user.findUnique({
              where: { email: credentials.email }
            });
          
            if(!existingUser) {
              console.log("User not found");
              return null;
            }
          
            const passwordMatch = await compare(credentials.password, existingUser.password);
            if(!passwordMatch) {
              console.log("Incorrect password");
              return null;
            }
          
            console.log("User authenticated successfully:", existingUser);
          
            return {
              id: String(existingUser.id),
              username: existingUser.username,
              email: existingUser.email,
            };
          }
          
        })
      ],
      callbacks: {
        async jwt ({ token,user}){
          console.log(token,user);
          if(user){
            return {
              ...token,
              username:user.username
            }
          }
          return token
        },
        async session({session,token}){
          return {
            ...session,
            user:{
              ...session.user,
              username:token.username
            }
          }
         
        },
      }
}