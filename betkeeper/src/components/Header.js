import React from "react";
import styled from "styled-components";
import Members from "../pages/members";
const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding: 20px;
  background-color: gray;

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
