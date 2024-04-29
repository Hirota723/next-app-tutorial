import Head from "next/head";
import { Main } from "@/src/components/Main"; // Changed import from "next/document" to "@/components/Main"
import { Header } from "@/src/components/Header";
import styles from "@/src/styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);

  // onClickの処理
  const handleClick = (e) => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  // const handleClick = useCallback((e) => {
  //   console.log(e.target.href);
  //   e.preventDefault(); // デフォルトのイベントをキャンセルする
  //   alert(foo);
  // }, []);

  // ページが読み込まれた時のイベント
  useEffect(() => {
    // console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      // console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={styles.main}>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />

      <h1>{count}</h1>

      <button onClick={handleClick}>ボタン</button>

      <Main page="index" />
    </div>
  );
}
