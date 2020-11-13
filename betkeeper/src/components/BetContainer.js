import React, { useState, useEffect } from "react";
// import API from "../utils/API";
import BetContext from "../utils/betContext";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import BetDetail from "./BetDetail";
import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
`;
const BetContainer = () => {
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
    <BetContext.Provider
    // value={{
    //   search,
    //   result,
    //   handleInputChange,
    //   handleFormSubmit,
    // }}
    >
      <Layout>
        <Header />
        <Main>
          <BetDetail />
        </Main>
        <Footer />
      </Layout>
    </BetContext.Provider>
  );
};
export default BetContainer;
