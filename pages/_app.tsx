import { SessionProvider } from "next-auth/react";
import "../app/global.css";

interface MyAppProps {
  Component: React.ComponentType;
  pageProps: {
    session: any;
    [key: string]: any;
  };
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const { session, ...restPageProps } = pageProps;
  return (
    <SessionProvider session={session}>
      <Component {...restPageProps} />
    </SessionProvider>
  );
}

export default MyApp;
