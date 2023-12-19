import { SessionProvider } from "next-auth/react";

import Layout from "@/components/layout/Layout";
import MenuProvider from "@/context/MenuContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <MenuProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MenuProvider>
    </SessionProvider>
  );
}
