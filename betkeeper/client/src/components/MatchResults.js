import React, { useState, useEffect } from "react";
import axios from "axios";

const MatchResults = () => {
  const [match, setMatch] = useState([]);
  const [odds, setOdds] = useState([]);

  const fetchData = () => {
    const matchAPI =
      "https://api.the-odds-api.com/v3/odds/?sport=americanfootball_nfl&region=us&mkt=h2h&apiKey=8b8d72d411a26345f2ca96d33b339f9a&oddsFormat=american";

    const getMatch = axios.get(matchAPI);
    axios.all([getMatch]).then(
      axios.spread((...allData) => {
        const allDataMatches = allData[0].data.data[0].teams;
        const allDataOdds = allData[0].data.data[0].sites[0].odds.h2h;

        setMatch(allDataMatches);
        setOdds(allDataOdds);

        // console.log(allDataOdds);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Game info</h1>
      Teams: {match}
      <br></br>
      <br></br>
      Odds: {odds}
    </div>
  );
};

export default MatchResults;
