import {Link} from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarComponent() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to={"/"}>Beranda</Nav.Link>
                    <Nav.Link as={Link} to={"/tentangSaya"}>Tentang saya</Nav.Link>
                    <Nav.Link as={Link} to={"/karya"}>Karya</Nav.Link>
                    <Nav.Link as={Link} to={"/kontak"}>Kontak</Nav.Link>
                    <Nav.Link as={Link} to={"/gallery"}>Gallery</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}