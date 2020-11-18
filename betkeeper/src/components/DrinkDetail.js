import React, { useContext } from "react";
import styled from "styled-components";
import Box from './BoxContainer';
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";

const StyledDrinkDetail = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
        h3 {
        font-size: 16px;
        line-height: 24px;
        margin: 0;
        }
        img {
        margin: 20px auto;
        max-width: 100%;
        height: auto;
        }
    
    @media (max-width: 600px) {
        .card {
        width: 100%;
        border-radius: 0;
        }
    }
`;
const DrinkDetail = () => {

    return (
    
        <StyledDrinkDetail>
        <div>
            <Row>
                <Col><Box /></Col>
            </Row>
        </div>
        </StyledDrinkDetail>
    );
};

export default DrinkDetail;