import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import { useSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";
import { Adapter } from "next-auth/adapters";
import { OAuthConfig } from "next-auth/providers";
import { GoogleProfile } from "next-auth/providers/google";
import TodoPage from "@/components/TodoPage";
import React from "react";
import { RootLayout } from "@/components/RootLayout";

export default function Page() {
  const { data: session } = useSession();

  if (session) {
    return (
      <RootLayout>
        <TodoPage />
      </RootLayout>
    );
  }
}

export const getServerSideProps = async (context: {
  req: NextApiRequest;
  res: NextApiResponse;
  authOptions: { adapter: Adapter; providers: OAuthConfig<GoogleProfile>[] };
}) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "api/auth/signin",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
