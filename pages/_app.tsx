import "../styles/globals.css";
import "primeicons/primeicons.css";
import type { AppProps } from "next/app";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout/Layout";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

function App({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </QueryClientProvider>
  );
}

// @Tamer
// we could probably check if authenticated here.
// if yes, show the layout; otherwise don't

export default App;
