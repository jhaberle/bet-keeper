import React from "react";
import Box4 from '../components/BoxBetsContainer';
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
      <Layout>
        <Box4 />
      </Layout>
    </Container>  
  );
};

export default Members;
