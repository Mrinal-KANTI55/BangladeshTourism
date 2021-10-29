import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>header</h2>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Bangladesh Tourism</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto text-decoration-none">
                            <Link className="text-decoration-none text-light mx-2" to='/home'>Home</Link>
                            <Link className="text-decoration-none text-light mx-2" to='/tourismoffer'>Tourism Offer</Link>
                            <Link className="text-decoration-none text-light mx-2" to='/addtouroffer'>Add Tour Offer</Link>
                        </Nav>
                        <Nav >
                            <Nav.Link href="#deets">user name</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;