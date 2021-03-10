import Head from "next/head";
import Link from "next/link";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokemon List | About</title>
        <meta name="keywords" content="pokemon" />
      </Head>
      <div className={styles.title}>
        <h1 className={styles.text}>Welcome to Next.js</h1>
        <Link href="/pokemon">
          <a className={styles.btn}>See Pokemon Listing</a>
        </Link>
      </div>
    </>
  );
}
