import React from 'react';
import styled from 'styled-components';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BetSlip from './BetSlip';

const StyledBox4 = styled.div`
    .flex-container {
        display: flex;
        flex-direction: column;
    }
`;

const Box4 = () => {
    return (
    <StyledBox4>
        <div className="flex-container">
            <BetSlip />
        </div>
    </StyledBox4>
    );
};

export default Box4;