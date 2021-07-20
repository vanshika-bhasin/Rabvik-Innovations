import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';

function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav>
                            <Nav.Link href="/" >Home</Nav.Link>
                            <Nav.Link href="/login" >Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
