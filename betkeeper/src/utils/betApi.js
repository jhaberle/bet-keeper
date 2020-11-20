// API to get odds back

import axios from "axios";

// const sportKey = "americanfootball_nfl";

// const APIKEY = "18b8d72d411a26345f2ca96d33b339f9a";
// const BASEURL =
//   `https://api.the-odds-api.com/v3/odds/?sport=` +
//   sportKey +
//   `&region=us&mkt=h2h&apiKey=` +
//   APIKEY;

const betAPI = {
  search: function (query) {
    return axios.get(
      `https://api.the-odds-api.com/v3/odds/?sport=${query}&region=us&mkt=h2h&apiKey=8b8d72d411a26345f2ca96d33b339f9a&oddsFormat=american`
    );
  },
};

export default betAPI;

