import React from 'react';
import styled from 'styled-components';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Betslip from './BetSlip';

const StyledBox4 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 2px solid black;
padding: 20px;
margin-bottom: 20%;
margin-left: 20%;
width: fit-content;
height: fit-content;
border-radius: 15px;
background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
background-blend-mode: multiply,multiply;
box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);

    .flex-container {
        display: flex;
        flex-direction: column;
    }
`;

const Box4 = () => {
    return (
    <StyledBox4>
        <div className="flex-container">
            <Betslip />
        </div>
    </StyledBox4>
    );
};

export default Box4;