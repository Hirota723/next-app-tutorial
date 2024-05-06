import Head from "next/head";
import styles from "@/src/styles/Home.module.css";
import { Main } from "@/src/components/Main"; // Changed import from "next/document" to "@/components/Main"
import { Header } from "@/src/components/Header";
import { useCounter } from "../hooks/useCounter";
import { useInputArray } from "../hooks/useInputArray";
import { useBgLightBlue } from "../hooks/useBgLightBlue";

export default function About() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgLightBlue();

  return (
    <div className={styles.main}>
      <Head>
        <title>About Page</title>
      </Head>

      <Header />

      {isShow ? <h1>{count}</h1> : null}

      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <Main page="about" />
    </div>
  );
}
