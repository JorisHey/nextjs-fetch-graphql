import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout home={true} parent={{
      name: "home",
      path: "/"
    }}>
    <div className={styles.container}>
      <Head>
        <title>Home -- Go and grab some content</title>
        <meta name="description" content="Go and grab some content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className={styles.get}>
          GO and{" "}
          <Link href="/countries">
            <a>get</a>
          </Link>{" "}
          some countries...
        </p>
      </main>
    </div>
    </Layout>
  );
};

export default Home;
