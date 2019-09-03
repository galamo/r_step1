import * as axios from "axios";
console.log(axios);
function getCountries() {
  return axios.get("https://restcountries.eu/rest/v2/all");
}

export const service = { getCountries };
