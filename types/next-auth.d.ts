import "next-auth/jwt";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      email: string;
      id: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    name: string;
    email: string;
    image: string;
  }
}
