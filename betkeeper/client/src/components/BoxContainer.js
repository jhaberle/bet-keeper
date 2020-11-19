import React, { useContext } from 'react';
import styled from 'styled-components';
import DrinkContext from '../utils/drinkContext';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DrinkSearchForm from './DrinkSearchForm';

const StyledBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 2px solid black;
margin-top: 200px;
width: fit-content;
height: fit-content;
border-radius: 15px;
background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
background-blend-mode: multiply,multiply;
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

    const {
        result: { strDrink },
    } = useContext(DrinkContext);
    
    return (
            <StyledBox>
                <div className="flex-container gradient-border">
                    <Row>
                        <Col><h5>Search for a Drink!</h5>
                            <Row>
                                <Col><DrinkSearchForm /></Col>
                            </Row>
                            <Row>
                                <Col><p id="drinkres"><h1>{strDrink}</h1></p></Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </StyledBox>
    );
};

export default Box;