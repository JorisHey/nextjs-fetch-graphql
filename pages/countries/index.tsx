import { GetServerSideProps, NextPage } from "next";
import router from "next/router";
import React from "react";
import Layout from "../../components/layout";
import type { GetAllCountriesQuery } from "../../generated/graphql";
import { getAllCountries } from "../../lib/getCountry";

export const getServerSideProps: GetServerSideProps = async () => {
  const countries = await getAllCountries();

  return {
    props: { data: countries },
  };
};

const Countries: NextPage<{ data: GetAllCountriesQuery["countries"] }> = ({ data }) => {
  const [searchCountry, setSearchCountry] = React.useState("");

  return (
    <>
      <Layout
        home={false}
        parent={{
          name: "home",
          path: "/",
        }}
      >
        <h2>Let&apos;s search for it:</h2>
        <input
          type="text"
          list="countriesList"
          name="searchCountry"
          id="searchCountry"
          value={searchCountry}
          onChange={(e) => setSearchCountry(e.target.value)}
        />

        <datalist id="countriesList">
          
          {data.map(country => (
            <option key={country.code} value={country.code}>{country.name}</option>
          ))}
        </datalist>

        <input
          type="button"
          value="Search country-code"
          onClick={() => router.push(`/countries/${searchCountry}`)}
        />
      </Layout>
    </>
  );
};

export default Countries;
