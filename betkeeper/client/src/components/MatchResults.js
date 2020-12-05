import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import betAPI from "../utils/betApi";
import betContext from "../utils/betContext";

const MatchResults = () => {
  // const [match, setMatch] = useState([]);
  // const [odds, setOdds] = useState([]);


  const [betSearch, setBetSearch] = useState("");
  const [betResult, setBetResult] = useState({});

  useEffect(() => {
    searchGames("americanfootball_nfl");
  }, []);


  const searchGames = async (query) => {
    try {
      const res = await betAPI.search(query);
      console.log(res.data);
      setBetResult(res.data);
    } catch (error) {
      console.log("There was an error processing your results");
    }
  };

  

  // const fetchData = () => {
  //   const matchAPI =
  //     "https://api.the-odds-api.com/v3/odds/?sport=americanfootball_nfl&region=us&mkt=h2h&apiKey=8b8d72d411a26345f2ca96d33b339f9a&oddsFormat=american";

  //   const getMatch = axios.get(matchAPI);
  //   axios.all([getMatch]).then(
  //     axios.spread((...allData) => {
  //       const allDataMatches = allData[0].data.data[0].teams;
  //       const allDataOdds = allData[0].data.data[0].sites[0].odds.h2h;

  //       setMatch(allDataMatches);
  //       setOdds(allDataOdds);

  //       // console.log(allDataOdds);
  //     })
  //   );
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);


  const {
    betresult: {matches},
  } = useContext(betContext)

  return (
    <div>
      <h1>Game info</h1>
      Teams: {matches}
      <br></br>
      <br></br>
     
    </div>
  );
};

export default MatchResults;
