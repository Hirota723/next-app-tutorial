import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import HeadLine from "@/components/HeadLine";
import Logo from "./Logo";

const inter = Inter({ subsets: ["latin"] });

export default function Header(props) {
  return (
    <>
      <div className={styles.description}>
        <HeadLine page={props.page} />
        <Logo />
      </div>
    </>
  );
}
