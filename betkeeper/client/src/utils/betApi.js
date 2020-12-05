// API to get odds back

import axios from "axios";



const betAPI = {
  search: function () {
      return axios.get(
        `https://api.the-odds-api.com/v3/odds/?sport=americanfootball_nfl&region=us&mkt=h2h&apiKey=8b8d72d411a26345f2ca96d33b339f9a&oddsFormat=american`
      );
    } 
     
  };  




export default betAPI;
