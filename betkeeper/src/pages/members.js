import React from "react";

import {
  Card,
  Form,
  Col,
  Container,
  Row,
  Button,
  ListGroup,
  CardDeck,
} from "react-bootstrap";
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
      <Row>
        <Col sm={6}>
          <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Email
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
                Spread
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
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={5}>
                <Form.Control type="text" placeholder="Wager" />
              </Col>
              <Col sm={5}>
                <Form.Control type="text" placeholder="Payout" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col sm={{ span: 8, offset: 4 }}>
                <Button type="submit">Submit Bet Slip</Button>
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
    </Layout>
  </Container>
  );
};

export default Members;
