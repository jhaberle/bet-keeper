import React from 'react';
import styled from 'styled-components';
import Cards from './Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const StyledBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: black;
width: 100%;
border-radius: 25px;

h1 {
    color: white;
}
`;

const Box = () => {
    
    return (

        <Container fluid>
            <StyledBox>
                <Row>
                <Col>
                <Cards />
                </Col>
                <Col><h1>Hello</h1></Col>
                <Col><h1>Bye</h1></Col>
                </Row>
            </StyledBox>
        </Container>
    );
};

export default Box;