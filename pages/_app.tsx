import "../styles/globals.css";
import "primereact/resources/primereact.min.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import useAuthStore from "../hooks/stores/useAuthStore";
import Layout from "../components/Layout/Layout";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/misc/Loader";

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
    return <Loader />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </QueryClientProvider>
  );
}

export default App;
