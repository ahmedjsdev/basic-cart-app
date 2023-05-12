

import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'

export default function AppLayout() {
  const cart = useSelector((state) => state.cart);
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={''}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/cart'}>Cart - {cart.length}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
        <Outlet />
    </Container>
    </>
  )
}
