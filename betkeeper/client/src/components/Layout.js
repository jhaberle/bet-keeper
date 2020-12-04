import React from "react";
import { Container } from "react-bootstrap";

const Layout = (props) => {
  return <Container fluid style={{minHeight:'100vh'}}>{props.children}</Container>;
};

export default Layout;
