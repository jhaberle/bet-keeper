import React, { useContext } from "react";
import styled from "styled-components";
import BetContext from "../utils/betContext";
<<<<<<< HEAD
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
=======

import { Button, Form, Row, Col } from "react-bootstrap";
>>>>>>> b11372ff79bd4d18ea0b109fbd37684164c60c7b


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
      margin-top: 10px;
      margin-left: 20px;
      height: 40px;
      outline: none;
    }
  }

  .example_b {
<<<<<<< HEAD
color: #fff !important;
text-transform: uppercase;
text-decoration: none;
background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
padding: 20px;
border-radius: 50px;
display: inline-block;
border: none;
transition: all 0.4s ease 0s;
}
=======

    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 20px;
    border-radius: 50px;
    display: inline-block;
    border: none;
    transition: all 0.4s ease 0s;
  }
>>>>>>> b11372ff79bd4d18ea0b109fbd37684164c60c7b

  .example_b:hover {
text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
transition: all 0.4s ease 0s;
}
`;
const MatchSearchForm = () => {
{ /* const { search, handleInputChange, handleFormSubmit } = useContext(
    BetContext
);*/}
  return (
    <StyledMatchSearchForm>
<<<<<<< HEAD
        <div className="form-group">
            <Row>
            <Col><input
            className="form-control"
            name="search"
            type="text"
            placeholder="Search for a Match"
            id="search"
            /></Col>
            <Col><div class="button_cont" align="center"><a class="example_b" href="add-website-here" target="_blank" rel="nofollow noopener">Search</a></div></Col>
            </Row>
        </div>
=======
      <div className="form-group">
        <Row>
          <Col>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select League</Form.Label>
              <Form.Control as="select">
                <option>NFL</option>
                <option>NCAA Football</option>
                <option>NBA</option>
                <option>English Premier League</option>
                <option>MLB</option>
                <option>NHL</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <div class="button_cont" align="center">
              <a
                class="example_b"
                href="add-website-here"
                target="_blank"
                rel="nofollow noopener"
              >
                Search
              </a>
            </div>
          </Col>
        </Row>
      </div>

>>>>>>> b11372ff79bd4d18ea0b109fbd37684164c60c7b
    </StyledMatchSearchForm>
  );
};
export default MatchSearchForm;
