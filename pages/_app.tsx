import "../styles/globals.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useAuthStore from "../hooks/stores/useAuthStore";
import Layout from "../components/Layout/Layout";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 1 } },
});

function App({ Component, pageProps }: AppProps) {
  const { isAuthenticated } = useAuthStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  // console.log(`Is Authenticated? ${isAuthenticated ? "Yes" : "No"}`);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("auth/signin");
    }

    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </QueryClientProvider>
  );
}

export default App;
