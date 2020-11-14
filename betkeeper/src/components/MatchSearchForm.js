import React, { useContext } from "react";
import styled from "styled-components";
import BetContext from "../utils/betContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from 'react-bootstrap';

const StyledMatchSearchForm = styled.form`
  display: flex;
  padding: 10px;
  margin-top: 10px;
  width: 80%;
  .form-group {
    display: flex;
    width: 100%;
    label {
      font-weight: bold;
      margin-bottom: 20px;
    }
    input {
      margin-left: 20px;
      height: 40px;
      outline: none;
    }
    button {
      margin-left: 10px;
      float: right;
      height: 40px;
      border-radius: 5px;
      background-color: grey;
      color: #ffffff;
      font-size: 20px;
    }
  }
`;
const MatchSearchForm = () => {
{ /* const { search, handleInputChange, handleFormSubmit } = useContext(
    BetContext
);*/}
  return (
    <StyledMatchSearchForm>
        <Row>
        <div className="form-group">
            <Row>
            <Col><lable htmlFor="search">Search for a Match:</lable></Col>
            <Col><input
            className="form-control"
            name="search"
            type="text"
            placeholder="Search for a Match"
            id="search"
            /></Col>
            <br />
            <br />
            <Col><Button variant="success">Search</Button></Col>
              <Row>
                <Col><p>Response Here</p></Col>
              </Row>
            </Row>
        </div>
        </Row>
    </StyledMatchSearchForm>
  );
};
export default MatchSearchForm;
