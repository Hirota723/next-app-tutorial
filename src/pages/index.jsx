import Head from "next/head";
import { Main } from "@/src/components/Main"; // Changed import from "next/document" to "@/components/Main"
import { Header } from "@/src/components/Header";
import styles from "@/src/styles/Home.module.css";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  // ページが読み込まれた時のイベント
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [count]);

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
