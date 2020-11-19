import React, { useState, useEffect } from "react";
import cocktailAPI from "../utils/cocktailAPI";
import betAPI from "../utils/betApi";
import BetContext from "../utils/betContext";
import DrinkContext from "../utils/drinkContext";
import Main from "./Main";
import BetDetail from "./BetDetail";
import DrinkDetail from "./DrinkDetail";
import styled from "styled-components";
import RandomDrinkDetail from "./RandomDrinkDetail";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Layout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
`;
const GeneralContainer = () => {
  const [result, setResult] = useState({});
  const [search, setSearch] = useState("");

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

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchDrinks(search);
  };

  return (
    <BetContext.Provider>
      <DrinkContext.Provider value={{
        search,
        result,
        handleInputChange,
        handleFormSubmit,
      }}>
        <Layout>
          <Main>
            <Row>
              <Col sm><DrinkDetail /></Col>
              <Col sm><BetDetail /></Col>
              <Col sm><RandomDrinkDetail /></Col>
            </Row>
          </Main>
        </Layout>
      </DrinkContext.Provider>
    </BetContext.Provider>
  );
};
export default GeneralContainer;
