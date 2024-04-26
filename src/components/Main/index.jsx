import { Inter } from "next/font/google";
import styles from "./Main.module.css";
import { Links } from "../Links";
import { Heading } from "../Heading";
import { MainVisual } from "../MainVisual";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <Heading page={props.page} />

        <MainVisual />

        <Links />
      </main>
    </>
  );
}
