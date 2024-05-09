import Link from "next/link";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      {NAV_ITEMS.map((items) => {
        return (
          <Link key={items.href} href={items.href} legacyBehavior>
            <a className={styles.anchor}>{items.label}</a>
          </Link>
        );
      })}
    </header>
  );
};
