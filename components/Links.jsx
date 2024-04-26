import { Inter } from "next/font/google";
import styles from "./Links.module.css";

const inter = Inter({ subsets: ["latin"] });
const ITEMS = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Docs",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Learn",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Templates",
    description: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy",
    description:
      "Instantly deploy your Next.js site to a shareable URL with Vercel.",
  },
];

export function Links() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.grid}>
          {ITEMS.map((item) => {
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
