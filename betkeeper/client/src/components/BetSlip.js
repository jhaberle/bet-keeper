import axios from "axios";
import React, { useState } from "react";
import { Card, Form, Col, Row, Button, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import TableBetSlip from '../components/TableBetslips/TableBetslips.js';

const StyledButton = styled.div`
  .example_b {
    justify-content: center;
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

const Betslip = () => {
  const [input, setInput] = useState({
    team1: "",
    team2: "",
    odds: "",
    wager: "",
    payout: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    const newBetslip = {
      team1: input.team1,
      team2: input.team2,
      odds: input.odds,
      wager: input.wager,
      payout: input.payout,
    };
    console.log(newBetslip);
    axios
      .post("http://localhost:3001/api/betslips", newBetslip)
      .then(() => {
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
  <React.Fragment>
    <Row>
      <Col sm={10}>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Matchup
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                onChange={handleChange}
                name="team1"
                value={input.team1}
                placeholder="Team 1"
              />
            </Col>

            <Col sm={5}>
              <Form.Control
                type="text"
                placeholder="Team 2"
                onChange={handleChange}
                name="team2"
                value={input.team2}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Odds
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="ex. Chelsea +2"
                onChange={handleChange}
                name="odds"
                value={input.odds}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={2}></Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                placeholder="Wager"
                onChange={handleChange}
                name="wager"
                value={input.wager}
              />
            </Col>
            <Col sm={5}>
              <Form.Control
                type="text"
                placeholder="Payout"
                onChange={handleChange}
                name="payout"
                value={input.payout}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ span: 8, offset: 4 }}>
              <StyledButton>
                <div class="button_cont" align="center">
                  <a
                    class="example_b"
                    href="add-website-here"
                    target="_blank"
                    rel="nofollow noopener"
                    onClick={handleClick}
                  >
                    Submit Bet Slip
                  </a>
                </div>
              </StyledButton>
            </Col>
          </Form.Group>
        </Form>
      </Col>
    <Col>

    </Col>
    </Row>
    <br></br>
    <Row>
      <Col>
        <TableBetSlip/>
      </Col>
    </Row>
  </React.Fragment>
  );
};

export default Betslip;
