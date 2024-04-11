import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { HeadLine } from "@/components/HeadLine";
import { Logo } from "./Logo";

const inter = Inter({ subsets: ["latin"] });

export function Header(props) {
  return (
    <>
      <div className={styles.description}>
        <HeadLine page={props.page} />
        <Logo />
      </div>
    </>
  );
}
