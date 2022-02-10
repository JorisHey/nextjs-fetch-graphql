import { request } from "graphql-request";

const COUNTRY = (countryCode: string) => `{
    country(code: "${countryCode}") {
        name
        native
        capital
        continent {name}
        emoji
        currency
        languages {
            code
            name
        }
    }
}`;

export default async function getCountry(countryCode: string) {
  return request(
    "https://countries.trevorblades.com/graphql",
    COUNTRY(countryCode)
  )
    .then((r) => {
      return r.country;
    })
    .catch((e) => {
      throw e;
    });
}
