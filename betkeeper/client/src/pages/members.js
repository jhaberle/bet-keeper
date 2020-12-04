import React from "react";
import Box4 from '../components/BoxBetsContainer';
import { Container } from "react-bootstrap";
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = styled.div`
  display: grid;
  height: 100vh;
  margin-top: 250px;
  margin-left: 80px;
  grid-template-rows: auto 1fr auto;
`;

const Members = () => {
  return (
  <>
  <NavBar/>
    <Container>
      <Layout>
          <Box4 />
      </Layout>
    </Container>
  <Footer/>
  </>
  );
};

export default Members;
