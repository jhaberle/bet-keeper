import React from "react";
import styled from "styled-components";
// import Members from "../pages/Members";
const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  padding: 10px;
  background-color: #191970;

  h1 {
    color: black;
  }
`;
const Header = () => {
  return (
    <StyledHeader>
      <h1>Bet Keeper</h1>
    </StyledHeader>
  );
};
export default Header;
