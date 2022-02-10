import next, { NextPage } from "next";
import router from "next/router";
import React from "react";
import Layout from "../../components/layout";
import { useCountryQuery } from "../../graphql/generated";

const Countries: NextPage = () => {
    const [searchCountry, setSearchCountry] = React.useState('BE')

  return (
    <>
      <Layout home={false} parent={{
              name: "home",
              path: "/"
          }}>
        <h2>Let&apos;s search for it:</h2>
        <input type="search" name="searchCountry" id="searchCountry" value={searchCountry} onChange={(e) => setSearchCountry(e.target.value)} />
        <input type="button" value="Search country-code" onClick={ () => router.push(`/countries/${searchCountry}`) } />
      </Layout>
    </>
  );
};

export default Countries;
