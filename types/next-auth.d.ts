import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    id: string;
    user: {
      id: string;
      name: string;
      email: string;
      image: string;
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    image: string;
  }
}
