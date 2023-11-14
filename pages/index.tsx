import Head from "next/head";
import AuthForm from "@/components/auth/AuthForm";

import style from "./index.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Simple Order System</title>
        <meta name="description" content="Generated by Simple Order System" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.container}>
        <AuthForm />
      </div>
    </>
  );
}
