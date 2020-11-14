import React, { useState, useEffect } from "react";
import cocktailAPI from "../utils/cocktailAPI";
import betAPI from "../utils/betApi";
import BetContext from "../utils/betContext";
import DrinkContext from "../utils/drinkContext";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import BetDetail from "./BetDetail";
import DrinkDetail from "./DrinkDetail";
import styled from "styled-components";
import RandomDrinkDetail from "./RandomDrinkDetail";

const Layout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
`;
const GeneralContainer = () => {
  // const [result, setResult] = useState({});
  // const [search, setSearch] = useState("");
  // useEffect(() => {
  //   searchMovies("Manhattan");
  // }, []);
  // const searchMovies = async (query) => {
  //   try {
  //     const res = await API.search(query);
  //     console.log(res.data);
  //     setResult(res.data);
  //   } catch (error) {
  //     console.log("There was an error processing your results");
  //   }
  // };
  // const handleInputChange = (event) => {
  //   const { value } = event.target;
  //   setSearch(value);
  // };
  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   searchMovies(search);
  // };
  return (
    <BetContext.Provider>
      <DrinkContext.Provider>
        <Layout>
          <Header />
            <Main>
              <DrinkDetail />
              <BetDetail />
              <RandomDrinkDetail />
            </Main>
          <Footer />
        </Layout>
      </DrinkContext.Provider>
    </BetContext.Provider>
  );
};
export default GeneralContainer;
