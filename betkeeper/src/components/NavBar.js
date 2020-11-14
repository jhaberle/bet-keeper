import React from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';

const StyledNavBar = styled.div`
    .navcss {
        background-color: black;
    }
`;

const NavBar = () => {

    return (
<StyledNavBar>       
    <Nav className="navcss" activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
        </Nav.Item>
    </Nav>
</StyledNavBar>
    );

};

export default NavBar; 