import React from 'react';
import styled from 'styled-components';
import Cards from './Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import DrinkSearchForm from './DrinkSearchForm';

const StyledBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 2px solid black; 
width: fit-content;
height: fit-content;
border-radius: 15px;

.flex-container {
    display: flex;
    flex-direction: column;
}

h5 {
    color: black;
    justify-content: center;
    align-items: center;
}
`;

const Box = () => {
    
    return (
            <StyledBox>
                <div className="flex-container">
                    <Row>
                        <Col><h5>Search for a Drink!</h5>
                            <Row>
                                <Col><DrinkSearchForm /></Col>
                            </Row>
                            <Row>
                                <Col><p id="drinkres"></p></Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </StyledBox>
    );
};

export default Box;