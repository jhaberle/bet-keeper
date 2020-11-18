import React from "react";
import Betslip from "../components/BetSlip";
import { Container } from "react-bootstrap";
import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  height: 100vh;
  margin-top: 250px;
  margin-left: 80px;
  grid-template-rows: auto 1fr auto;
`;

const Members = () => {
  return (
    <Container>
      <Betslip />
    </Container>  
  );
};

export default Members;
