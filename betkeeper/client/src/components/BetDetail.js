import React, { useContext } from "react";
import styled from "styled-components";
import Box2 from "./BoxContainer2";
import Row from "react-bootstrap/Row";
import { Col, Form } from "react-bootstrap";

const StyledBetDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;
    padding: 40px;
    background-color: #ffffff;
    border-radius: 10px;
    margin-bottom: 40px;
    h3 {
      font-size: 16px;
      line-height: 24px;
      margin: 0;
    }
    img {
      margin: 20px auto;
      max-width: 100%;
      height: auto;
    }
  }
  @media (max-width: 600px) {
    .card {
      width: 100%;
      border-radius: 0;
    }
  }
`;
const BetDetail = () => {

  return (
    <StyledBetDetail>
      <div>
        <Row>
          <Col>
            <Box2 />
          </Col>
        </Row>
      </div>
    </StyledBetDetail>
  );
};

export default BetDetail;
