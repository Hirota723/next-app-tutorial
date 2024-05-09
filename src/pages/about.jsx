import Head from "next/head";
import styles from "@/src/styles/Home.module.css";
import { Main } from "@/src/components/Main"; // Changed import from "next/document" to "@/components/Main"
import { Header } from "@/src/components/Header";

const About = (props) => {
  return (
    <div className={styles.main}>
      <Head>
        <title>About Page</title>
      </Head>

      <Header />

      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}>
        {props.isShow ? "非表示" : "表示"}
      </button>
      {props.isShow ? <h2>{props.doubleCount}</h2> : null}
      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ol>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ol>

      <Main page="about" />
    </div>
  );
};

export default About;
