import "../styles/globals.css";
import "primeicons/primeicons.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useAuthStore from "../hooks/stores/useAuthStore";
import Layout from "../components/Layout/Layout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 0 } },
});

function App({ Component, pageProps }: AppProps) {
  const { isAuthenticated } = useAuthStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  console.log(`Authenticated? ${isAuthenticated}`);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("auth/signin");
    }

    setIsLoading(false);
  }, [isAuthenticated]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export async function getServerSideProps(context: any) {
  const { req, res } = context;

  if (!req.cookies.access_token) {
    res.writeHead(302, { Location: "/auth/signin" });
    res.end();
  }

  return {
    props: {},
  };
}

export default App;
