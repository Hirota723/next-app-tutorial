import Head from "next/head";
import { Main } from "@/src/components/Main"; // Changed import from "next/document" to "@/components/Main"
import { Header } from "@/src/components/Header";
import { useCallback, useEffect } from "react";

export default function Home() {
  const foo = 1;

  // onClickの処理
  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault(); // デフォルトのイベントをキャンセルする
    alert(foo);
  }, []);

  // ページが読み込まれた時のイベント
  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />

      <a href="/about" onClick={handleClick}>
        ボタン
      </a>

      <Main page="index" />
    </>
  );
}
