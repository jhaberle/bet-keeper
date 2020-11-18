import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" >
      <Navbar.Brand href="/">Bet Keeper</Navbar.Brand>
      <Nav className="navbar-links">
        <Nav.Link href="/members">Home</Nav.Link>
        <Nav.Link href="/bets">Bets</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
