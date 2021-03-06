import React, { useState, useEffect } from "react";
import cocktailAPI from "../utils/cocktailAPI";
import betAPI from "../utils/betApi";
import BetContext from "../utils/betContext";
import DrinkContext from "../utils/drinkContext";
import BetDetail from "./BetDetail";
import DrinkDetail from "./DrinkDetail";
import styled from "styled-components";
import API from "../utils/betSearchingAPI";
import BetslipContext from "../utils/betslipContext";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = styled.div`
`;

const GeneralContainer = () => {
  const [result, setResult] = useState({});
  const [search, setSearch] = useState("");

  const [betSearch, setBetSearch] = useState("");
  const [betResult, setBetResult] = useState({});

  const [bets, setBets] = useState([]);
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadBets();
  }, []);

  useEffect(() => {
    searchDrinks("Manhattan");
  }, []);

  useEffect(() => {
    searchGames("americanfootball_nfl");
  }, []);

  const searchDrinks = async (query) => {
    try {
      const res = await cocktailAPI.search(query);
      console.log(res.data);
      setResult(res.data);
    } catch (error) {
      console.log("There was an error processing your results");
    }
  };

  const searchGames = async (query) => {
    try {
      const res = await betAPI.search(query);
      console.log(res.data);
      setBetResult(res.data);
    } catch (error) {
      console.log("There was an error processing your results!!");
    }
  };

  function loadBets() {
    API.getBets()
      .then((res) => setBets(res.data))
      .catch((err) => console.log(err));
  }

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchDrinks(search);
  };

  const handleBetInputChange = (event) => {
    const { value } = event.target;
    setBetSearch(value);
  };

  const handleBetFormSubmit = (event) => {
    event.preventDefault();
    searchGames(betSearch);
  };

  return (
    <BetContext.Provider
      value={{
        betSearch,
        betResult,
        handleBetInputChange,
        handleBetFormSubmit,
      }}
    >
      <DrinkContext.Provider
        value={{
          search,
          result,
          handleInputChange,
          handleFormSubmit,
        }}
      >
        <BetslipContext.Provider>
          <Layout>
            <NavBar />
              <Row>
                <Col>
                  <DrinkDetail />
                </Col>
                <Col>
                  <BetDetail />
                </Col>
              </Row>
            <Footer />
          </Layout>
        </BetslipContext.Provider>
      </DrinkContext.Provider>
    </BetContext.Provider>
  );
};
export default GeneralContainer;
