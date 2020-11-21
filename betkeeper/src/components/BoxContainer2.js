import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import MatchSearchForm from "./MatchSearchForm";

const StyledBox = styled.div`

display: flex;
justify-content: center;
align-items: center;
border: 2px solid black; 
width: 60vh;
<<<<<<< HEAD
margin-top: 50px;
=======

margin-top: 50px;

>>>>>>> b11372ff79bd4d18ea0b109fbd37684164c60c7b
height: fit-content;
border-radius: 15px;
flex-direction: column;
background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
background-blend-mode: multiply,multiply;
box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);


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
                <Row>
                    <Col><p id="randomres">RESPONSE GOES HERE</p></Col>
                </Row>
            </StyledBox>
        </Container>
    );

};

export default Box2;
