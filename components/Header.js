import Link from "next/link";

export function Header() {
  return (
    <>
      <Link href="/" legacyBehavior>
        <a>Index</a>
      </Link>
      <Link href="./about" legacyBehavior>
        <a>About</a>
      </Link>
    </>
  );
}
