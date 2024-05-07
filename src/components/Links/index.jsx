import { Inter } from "next/font/google";
import styles from "./Links.module.css";

const inter = Inter({ subsets: ["latin"] });

export function Links({ items, handleReduce }) {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.grid}>
          {items.map((item) => {
            return (
              <a
                key={item.href}
                href={item.href}
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>
                  {item.title} <span>-&gt;</span>
                </h2>
                <p>{item.description}</p>
              </a>
            );
          })}
        </div>
      </main>
    </>
  );
}
