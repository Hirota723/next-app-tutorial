import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Links } from "@/components/Links";
import { Header } from "@/components/Header";
import { MainVisual } from "@/components/MainVisual";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <Header page={props.page} />

        <MainVisual />

        <Links />
      </main>
    </>
  );
}
