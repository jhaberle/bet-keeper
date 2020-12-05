import React from "react";
import styled from "styled-components";
const StyledFooter = styled.div`
line-height: 100px;
position: fixed;
background: rgba(28, 32, 36, 1);
bottom:0px;
width: 100%;
margin-top: 20px;
margin-left: 0;
margin-right: 0;
height: 70px;
text-align: center;
color: white;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <footer>
      &copy;{new Date().getFullYear()} Bet Keeper, Where drinking and betting
      becomes one.
      </footer>
    </StyledFooter>
  );
};
export default Footer;
