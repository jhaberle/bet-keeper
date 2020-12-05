import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = styled.div`
  display: grid;
  justify-content: center;
  height: 100vh;
  width: fit-content;

  #formcss {
    margin-top: 200px; 
  }
`;

const Login = () => {
  return (
  <>
  <NavBar/>
  <div className="container">
    <Layout>
      <Row>
        <Col></Col>
        <Col xs={6}>
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
  </div>
  <Footer/>
  </>
  );
};

export default Login;
