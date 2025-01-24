import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CollapsibleNavbar() {
  const [selected, setSelected] = useState<string>("all");

  const handleSelect = (key: string | null) => {
    if (key) setSelected(key);
  };

  const activeStyle: React.CSSProperties = {
    textDecoration: "underline",
    textUnderlineOffset: "4px",
    fontWeight: "bold",
    color: "#000000",
  };

  const defaultStyle: React.CSSProperties = {
    color: "#6c757d",
  };

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={{ fontWeight: "bold" }}>
          Countries
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="ms-auto"
            onSelect={handleSelect}
            activeKey={selected} // Set the activeKey to the selected state
          >
            <Nav.Link
              eventKey="all"
              href="#all"
              style={selected === "all" ? activeStyle : defaultStyle}
            >
              All
            </Nav.Link>
            <Nav.Link
              eventKey="asia"
              href="#asia"
              style={selected === "asia" ? activeStyle : defaultStyle}
            >
              Asia
            </Nav.Link>
            <Nav.Link
              eventKey="europe"
              href="#europe"
              style={selected === "europe" ? activeStyle : defaultStyle}
            >
              Europe
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleNavbar;
