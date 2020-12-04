import React, { useContext } from 'react';
import styled from 'styled-components';
import DrinkContext from '../utils/drinkContext';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DrinkSearchForm from './DrinkSearchForm';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const StyledBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 2px solid black;
margin-top: 50px;
margin-bottom: 50px;
width: fit-content;
height: fit-content;
border-radius: 15px;
background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
background-blend-mode: multiply,multiply;
box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
padding: 20px;

p {
    margin-top: 5px;
    text-align: left;
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

.accordiontoggle {
    background-image: linear-gradient(to right, #434343 0%, black 100%);
    color: white;
}

.images {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 15px;
}
`;

const Box = () => {

    const {
        result: { drinks },
    } = useContext(DrinkContext);

    return (
            <StyledBox>
                {drinks ? console.log(drinks) : console.log("Does not exist!")}
                <div className="flex-container gradient-border">
                    <Row>
                        <Col><h5>Search for a Drink!</h5>
                            <Row>
                                <Col><DrinkSearchForm /></Col>
                            </Row>
                            <Row>
                                <Col>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle className="accordiontoggle" as={Card.Header} eventKey="0">
                                        {drinks ? drinks[0].strDrink : "Not found"}
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <Image className="images" src={drinks ? drinks[0].strDrinkThumb : "Not Found"} thumbnail width="150" height="150" />
                                            <h5>Ingredients:</h5>
                                            <ol>
                                                <li>{drinks ? drinks[0].strIngredient1 : "Not Found"}</li>
                                                <li>{drinks ? drinks[0].strIngredient2 : "Not Found"}</li>
                                                <li>{drinks ? drinks[0].strIngredient3 : "Not Found"}</li>
                                                <li>{drinks ? drinks[0].strIngredient4 : "Not Found"}</li>
                                                <li>{drinks ? drinks[0].strIngredient5 : "Not Found"}</li>
                                            </ol>
                                            <p>{drinks ? drinks[0].strInstructions : "Not Found"}</p>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </StyledBox>
    );
};

export default Box;