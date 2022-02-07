import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import getCountry from "../../lib/getCountry";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const data = await getCountry(params?.code?.toUpperCase());
    return {
      props: {
        data,
      },
    };
  } catch (e) {
    const error =
      e instanceof Error ? e.message : new Error("There was an error");

    return {
      props: {
        error,
      },
    };
  }
};

const Countries: NextPage<{ data: { name: string }; error: any }> = ({
  data,
  error,
}) => {
  if (error) return <div>Failed to load</div>;

  return (
    <Layout
      home={false}
      parent={{
        name: "countries search",
        path: "/countries",
      }}
    >
      <Head>
        <title>Countries</title>
        <meta name="description" content="Grab some content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {data === null ? (
        <h1>No country found with this code</h1>
      ) : (
        <h1>{data.name}</h1>
      )}
    </Layout>
  );
};

export default Countries;
