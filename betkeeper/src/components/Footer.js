import React from "react";
import styled from "styled-components";
const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  height: calc(100vh - 95vh);
  padding: 20px;
  background-color: black;
  color: white;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <footer sticky="bottom">
      &copy;{new Date().getFullYear()} Bet Keeper, Where drinking and betting
      becomes one.
      </footer>
    </StyledFooter>
  );
};
export default Footer;
