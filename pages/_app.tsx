import { ThirdwebProvider } from "@3rdweb/react";
import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import Layout from "../components/layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  // Polygon Mumbai chainID 80001
  const supportedChainIds = [80001];

  // We only support Metamask which is an injected connector
  const connectors = {
    injected: {},
  };
  return (
    <>
      <Toaster />
      <Head>
        <title>{pageProps.title}</title>
      </Head>
      <ThirdwebProvider
        connectors={connectors}
        supportedChainIds={supportedChainIds}
      >
        <Layout title={pageProps.title}>
          <Component {...pageProps} />
        </Layout>
      </ThirdwebProvider>
    </>
  );
}
