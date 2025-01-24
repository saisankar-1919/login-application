import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CollapsibleNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract the current region from query params (case insensitive comparison)
  const queryParams = new URLSearchParams(location.search);
  const currentRegion = queryParams.get("region")?.toLowerCase() || "all";

  const [selected, setSelected] = useState<string>(currentRegion);

  // Sync the `selected` state with query params whenever `location.search` changes
  useEffect(() => {
    setSelected(currentRegion);
  }, [currentRegion]);

  const handleSelect = (key: string | null) => {
    if (key) {
      const params = new URLSearchParams(location.search);
      if (key === "all") {
        params.delete("region");
      } else {
        params.set("region", key);
      }
      navigate(`?${params.toString()}`);
    }
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
          <Nav className="ms-auto" onSelect={handleSelect} activeKey={selected}>
            <Nav.Link
              eventKey="all"
              style={selected === "all" ? activeStyle : defaultStyle}
            >
              All
            </Nav.Link>
            <Nav.Link
              eventKey="asia"
              style={selected === "asia" ? activeStyle : defaultStyle}
            >
              Asia
            </Nav.Link>
            <Nav.Link
              eventKey="europe"
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
