import React from 'react'
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import notflixLogoString from "@/assets/notflix-logo-str.svg";
import "./Header.style.css";

const Header = () => {
  const navigate = useNavigate()
  return (
    <Navbar expand="md" className="bg-black">
    <Container
      fluid
      style={{ width: "100%", height: "100%", padding: "0px 20px", userSelect: "none" }}
    >
      <Navbar.Brand onClick={() => navigate("/home")} style={{ width: "160px", height: "60px" }}>
        <img
          src={notflixLogoString}
          width="150"
          height="60"
          className="d-inline-block align-top"
          alt="Notflix logo"
          style={{ width: "150px", height: "60px", paddingBottom: "10px", cursor: "pointer" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle className="navbar-toggle" aria-controls="navbarScroll" variant="dark"/>
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link onClick={() => navigate("/home")} className="text-white">
            Home
          </Nav.Link>
          <Nav.Link onClick={() => navigate("/movies")} className="text-white">
            Movies
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="검색"
            className="search-input"
            aria-label="Search"
            style={{
              width: "100%",
              height: "40px",
            }}
          />
          <Button
            className="search-button"
            variant="outline-danger"
            style={{
              width: "50px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Search size={20} />
          </Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header