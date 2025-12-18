import Link from "next/link";
import Layout from "./layout";

export default function Page() {
  return (
    <>
      <h1>Hello Next.js!</h1>
      <Link href="/blog">Go to blog</Link>
    </>
  );
}
