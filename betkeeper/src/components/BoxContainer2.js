import React from 'react';
import styled from 'styled-components';
import Cards from './Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import MatchSearchForm from './MatchSearchForm';

const StyledBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: 2px solid black; 
width: 60vh;
height: fit-content;
border-radius: 15px;

h1 {
    color: black;
}
`;

const Box2 = () => {
    
    return (

        <Container fluid>
            <StyledBox>
                <Row>
                    <Col><MatchSearchForm /></Col>
                </Row>
            </StyledBox>
        </Container>
    );
};

export default Box2;