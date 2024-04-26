import Head from "next/head";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>

      <Header />

      <Main page="about" />
    </>
  );
}
