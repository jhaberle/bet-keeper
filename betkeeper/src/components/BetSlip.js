import React from "react";
import { Card, Form, Col, Row, Button, ListGroup } from "react-bootstrap";
import styled from 'styled-components';

const StyledButton = styled.div`
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
-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
transition: all 0.4s ease 0s;
}
`;

const Betslip = () => {
  return (
    <Row>
      <Col sm={6}>
        <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Matchup
            </Form.Label>
            <Col sm={5}>
              <Form.Control type="text" placeholder="Team 1" />
            </Col>

            <Col sm={5}>
              <Form.Control type="text" placeholder="Team 2" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>

              Odds

            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="ex. Chelsea +2" />
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                Bet Type
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Over/Under"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="Spread"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  type="radio"
                  label="Moneyline"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}></Form.Label>
            <Col sm={5}>
              <Form.Control type="text" placeholder="Wager" />
            </Col>
            <Col sm={5}>
              <Form.Control type="text" placeholder="Payout" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ span: 8, offset: 4 }}>
              <StyledButton>
              <div class="button_cont" align="center"><a class="example_b" href="add-website-here" target="_blank" rel="nofollow noopener">Submit Bet Slip</a></div>
              </StyledButton>
            </Col>
          </Form.Group>
        </Form>
      </Col>
      <Col>
        <Card style={{ width: "13rem" }}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              Chelsea vs Man City Chel +1 Moneyline $5 Wager/$25 Payout
              <Button variant="success">Win</Button>
              <Button variant="danger">Lose</Button>
            </ListGroup.Item>
            <ListGroup.Item>
              Tottenham vs Man U Tott Over $10 Wager/$14 Payout
              <Button variant="success">Win</Button>
              <Button variant="danger">Lose</Button>
            </ListGroup.Item>
            <ListGroup.Item>
              Arsenal vs Jevuntus Arsenal Moneyline $5 Wager/$45 Payout
              <Button variant="success">Win</Button>
              <Button variant="danger">Lose</Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default Betslip;
