import { SessionProvider } from "next-auth/react";

import Layout from "@/components/layout/Layout";
import MenuProvider from "@/context/MenuContext";
import TableProvider from "@/context/TableData";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <MenuProvider>
        <TableProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </TableProvider>
      </MenuProvider>
    </SessionProvider>
  );
}
