import "../styles/globals.css";
import "primeicons/primeicons.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useAuthStore from "../hooks/stores/useAuthStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
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
    </QueryClientProvider>
  );
}

// @Tamer
// we could probably check if authenticated here.
// if yes, show the layout; otherwise don't

export default App;
