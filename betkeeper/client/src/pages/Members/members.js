import React from "react";
import Box4 from '../../components/BoxBetsContainer';
import { Row, Col } from "react-bootstrap";
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import './style.css';

const Members = () => {

  return (
  <>
  <NavBar/>
    <div className="container">
      <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Box4 />
          </Col>
      </Row>
    </div>
  <Footer/>
  </>
  );
};

export default Members;
