import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import styled from 'styled-components';

const StyledNavBar = styled.div`
`

const NavBar = () => {
  return (
    // <Navbar fluid sticky="top" bg="dark" variant="dark" >
    //   <Navbar.Brand href="/">Bet Keeper</Navbar.Brand>
    //   <Nav className="navbar-links">
    //     <Nav.Link href="/home">Home</Nav.Link>
    //     <Nav.Link href="/bets">Bets</Nav.Link>
    //   </Nav>
    // </Navbar>
  <StyledNavBar>
  <Navbar bg="dark" expand="lg">
  <Navbar.Brand href="/">Bet Keeper</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/bets">Bets</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Navbar>
  </StyledNavBar>
  );
};

export default NavBar;
