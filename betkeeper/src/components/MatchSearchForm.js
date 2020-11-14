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
  width: 100%;
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
        <div className="form-group">
            <Row>
            <Col><input
            className="form-control"
            name="search"
            type="text"
            placeholder="Search for a Match"
            id="search"
            /></Col>
            <Col><Button variant="success">Search</Button></Col>
            </Row>
        </div>
    </StyledMatchSearchForm>
  );
};
export default MatchSearchForm;
