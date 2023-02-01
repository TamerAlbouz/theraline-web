import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Session } from "next-auth";
import { getSession, SessionProvider } from "next-auth/react";
import Layout from "../components/Layout/Layout";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
