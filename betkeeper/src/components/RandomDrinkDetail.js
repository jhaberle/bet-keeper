import React, { useContext } from "react";
import BetContext from "../utils/betContext";
import MatchSearchForm from "./MatchSearchForm";
import DrinkSearchForm from "./DrinkSearchForm";
import styled from "styled-components";
import Box3 from './BoxContainer3';
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
const RandomDrinkDetail = () => {
  //   const {
  // result: { API result parameters to be used },
  //   } = useContext(BetContext);
    return (
    
        <StyledDrinkDetail>
        <div>
            <Row>
                <Col><Box3 /></Col>
            </Row>
        </div>
        </StyledDrinkDetail>
    );
};

export default RandomDrinkDetail;