import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import { Search } from "react-bootstrap-icons";
import "./AppLayout.style.css";

import notflixLogoString from "@/assets/notflix-logo-str.svg";

function AppLayout() {
  return (
    <>
      <Navbar expand="md" className="bg-black">
        <Container
          fluid
          style={{ width: "100%", height: "100%", padding: "0px 20px" }}
        >
          <Navbar.Brand href="/" style={{ width: "160px", height: "60px" }}>
            <img
              src={notflixLogoString}
              width="150"
              height="60"
              className="d-inline-block align-top"
              alt="Notflix logo"
              style={{ width: "150px", height: "60px", paddingBottom: "10px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle className="navbar-toggle" aria-controls="navbarScroll" variant=""/>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="/movies" className="text-white">
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

      <Outlet />
    </>
  );
}

export default AppLayout;
