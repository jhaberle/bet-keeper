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
  background-color: #191970;
  color: white;
`;
const Footer = () => {
  return (
    <StyledFooter>
      &copy;{new Date().getFullYear()} Bet Keeper, Where drinking and betting
      becomes one.
    </StyledFooter>
  );
};
export default Footer;
