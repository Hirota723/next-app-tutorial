import styles from "@/styles/Home.module.css";
import { HeadLine } from "@/components/HeadLine";
import { Logo } from "./Logo";

export function Header(props) {
  return (
    <>
      <div className={styles.description}>
        <HeadLine page={props.page}>
          <code className={styles.code}>pages/{props.page}.js</code>
        </HeadLine>
        <Logo />
      </div>
    </>
  );
}
