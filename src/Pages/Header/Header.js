import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth/UseAuth';


const Header = () => {
     const { user, signOutButton } = useAuth ();
    return (
        <div>
            <h2>header</h2>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/home">Bangladesh Tourism</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto text-decoration-none">
                            <Link className="text-decoration-none text-light mx-2" to='/home'>Home</Link>
                            <Link className="text-decoration-none text-light mx-2" to='/tourismoffer'>TourismOffer</Link>
                            <Link className="text-decoration-none text-light mx-2" to='/addtouroffer'>AddTourOffer</Link>
                            <Link className="text-decoration-none text-light mx-2" to='/alluser'>AllUser</Link>
                            <Link className="text-decoration-none text-light mx-2" to='/managealloffer'>ManageAllOffer</Link>
                            <Link className='text-light text-decoration-none me-3' to="/login">{!user.email ? 'Log In' :
                                <Button onClick={signOutButton} >log Out</Button>}</Link>
                        </Nav>
                        <Nav >
                            <Link className='text-light text-decoration-none me-3' to="/login">{!user.email ? 'welcome' :
                                `welcome ${user.displayName}`}</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;