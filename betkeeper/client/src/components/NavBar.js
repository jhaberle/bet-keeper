import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar fluid sticky="top" bg="dark" variant="dark" >
      <Navbar.Brand href="/">Bet Keeper</Navbar.Brand>
      <Nav className="navbar-links">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/bets">Bets</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
