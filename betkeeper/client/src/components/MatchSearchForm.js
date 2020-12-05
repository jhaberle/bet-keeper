import React, { useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { Button, Form, Row, Col } from "react-bootstrap";

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

  .example_b:hover {
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
`;


const MatchSearchForm = () => {

const matchSubmit = async () => {
try {const res = await axios.get(
  `https://api.the-odds-api.com/v3/odds/?sport=americanfootball_nfl&region=us&mkt=h2h&apiKey=8b8d72d411a26345f2ca96d33b339f9a&oddsFormat=american`);

  console.log(res.data.data[0]);
  return res;
} catch(error) {
  console.log("There was an error processing the results")
}
  


};





  const handleBetInputChange = (event) => {
    const {value} = event.target;
    setBetSearch
  };
  
  const handleBetFormSubmit = (event) => {
    event.preventDefault();
    searchGames(search);
  }

  return (
    <StyledMatchSearchForm>
      <div className="form-group">
        <Row>
          <Col>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select League</Form.Label>
              <Form.Control
                id="league"
                as="select"
                onChange={(e) => onChangeHandler(e.target)}
              >
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
            <div
              class="button_cont"
              align="center"
              onClick={matchSubmit}
            >
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
    </StyledMatchSearchForm>
  );
};
export default MatchSearchForm;
