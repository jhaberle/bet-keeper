import React from "react";
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";

const StyledNavBar = styled.div`
  .navcss {
    background-color: black;
  }
`;

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/login">Bet Keeper</Navbar.Brand>
      <Nav className="navbar-links">
        <Nav.Link href="/members">Members</Nav.Link>
        <Nav.Link href="/bets">Bets</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
