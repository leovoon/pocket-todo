import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      email: string;
      id: string;
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    image: string;
  }
}
