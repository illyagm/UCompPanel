import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';

const NavStyle = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

       &:hover {
           color: white;
       } 
    }
`;

const NavComponent = () => {
    return (
        <NavStyle>
            <Navbar expand="lg">
                <Navbar.Brand href="/platforms"><b>UComp</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/platforms">Platforms</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/operations">Operations</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/about">About UComp</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </NavStyle>
    )

}

export default NavComponent;

