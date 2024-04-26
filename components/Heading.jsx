import styles from "./Heading.module.css";
import { HeadLine } from "./HeadLine";
import { Logo } from "./Logo";

export function Heading(props) {
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
