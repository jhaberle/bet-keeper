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
background-color: #708090;
box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);

p {
    margin-top: 10px;
    text-align: center;
}

.flex-container {
    display: flex;
    flex-direction: column;
}

h5 {
    color: black;
    justify-content: center;
    align-items: center;
    text-align: center;
}
`;

const Box = () => {
    
    return (
            <StyledBox>
                <div className="flex-container">
                    <Row>
                        <Col><h5>Random Drink! ヽ(•‿•)ノ </h5>
                            <Row>
                                <Col><p id="randomres">RESPONSE GOES HERE</p></Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </StyledBox>
    );
};

export default Box;