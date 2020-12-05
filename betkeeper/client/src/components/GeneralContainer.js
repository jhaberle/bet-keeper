import React, { useState, useEffect } from "react";
import cocktailAPI from "../utils/cocktailAPI";
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

  
  const [bets, setBets] = useState([]);
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadBets();
  }, []);

  useEffect(() => {
    searchDrinks("Manhattan");
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

  

  function loadBets() {
    API.getBets()
      .then((res) => setBets(res.data))
      .catch((err) => console.log(err));
  }

  function deleteBets(id) {
    API.deleteBet(id)
      .then((res) => loadBets())
      .catch((err) => console.log(err));
  }

  function handleBetslipInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
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
    <BetContext.Provider>
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
