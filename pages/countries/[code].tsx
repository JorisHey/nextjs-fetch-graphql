import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import type { Country } from "../../generated/graphql";
import {getCountry, getAllCountries} from "../../lib/getCountry";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const code = params?.code as string;
    const data = await getCountry(code.toUpperCase());

    return {
      props: {
        data,
        code,
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

const Countries: NextPage<{ data: Country; code: string; error: any }> = ({
  data,
  code,
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
        <>
          <h1>
            {data.name} -- {data.native}
          </h1>

          <table>
            <tbody>
              <tr>
                <td>CAPITAL:</td>
                <td>{data.capital}</td>
              </tr>
              <tr>
                <td>CURRENCY:</td>
                <td>{data.currency}</td>
              </tr>
              <tr>
                <td>CONTINENT:</td>
                <td>{data.continent.name}</td>
              </tr>
            </tbody>
          </table>
          <Image
            src={`https://countryflagsapi.com/svg/${code}`}
            width={200}
            height={150}
            alt= "Country Flag"
          />
        </>
      )}
    </Layout>
  );
};

export default Countries;
