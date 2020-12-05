import React from "react";
import { Form, Button, Container, Row, Col, Nav } from "react-bootstrap";
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = styled.div`
  display: grid;
  height: 100vh;

  #formcss {
    margin-top: 200px; 
  }
`;

const Login = () => {
  return (
  <>
  <NavBar/>
  <Container>
    <Layout>
      <Row>
        <Col></Col>
        <Col xs={4}>
          <Form id="formcss">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Layout>
  </Container>
  <Footer/>
  </>
  );
};

export default Login;
