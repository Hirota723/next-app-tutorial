import Head from "next/head";
import { Main } from "@/src/components/Main"; // Changed import from "next/document" to "@/components/Main"
import { Header } from "@/src/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />

      <Main page="index" />
    </>
  );
}
