import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Navigasi({ bahasa, setBahasa }) {
  const [display, setDisplay] = useState("none");
  const [color, setColor] = useState("");
  const location = useLocation();

  const input = useRef();
  const navigate = useNavigate();
  // const activePage = window.location.pathname;

  function handleFlagEng() {
    console.log(bahasa);
    setBahasa(true);
  }

  function handleFlagInd() {
    setBahasa(false);
  }

  function handleInputNav(e) {
    if (display == "none") {
      setDisplay("block");
      setColor("color");
      e.preventDefault();
    } else {
      setDisplay("none");
      setColor("");
    }
  }

  function handleEnter(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      navigate(`/hasil/${input.current.value}`);
    }
  }

  return (
    <>
      <Container>
        <Navbar collapseOnSelect expand="lg" className="navbar-dark px-lg-0 px-3" style={{ backgroundColor: "#36477f", overflowX: "hidden" }}>
          <Navbar.Brand as={Link} className="ps-lg-0 ps-0 ms-lg-0 ms-0" to="/">
            <img alt="" src="/logo.png" width="85" height="45" className="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-lg-5 pe-5">
              <Nav.Link className={`text-white fs-6 text-uppercase ${location.pathname === "/series" ? "text-decoration-underline fw-bold" : ""}`} as={Link} to="/series">
                SeriEs
              </Nav.Link>
              <Nav.Link className={`text-white fs-6 text-uppercase ${location.pathname === "/cast" ? "text-decoration-underline fw-bold" : ""}`} as={Link} to="/cast">
                Cast with US
              </Nav.Link>
              <Nav.Link className={`text-white fs-6 text-uppercase ${location.pathname === "/story" ? "text-decoration-underline fw-bold" : ""}`} as={Link} to="/story">
                send us your story
              </Nav.Link>
            </Nav>
            <Nav className="ps-lg-5 ms-lg-5 ms-0 ps-0 gap-lg-1 gap-md-4 gap-2 d-flex flex-lg-row flex-row position-relative align-items-center">
              <div className="">
                <Form inline className="form-search">
                  <Form.Control className={`input-navbar d-${display}`} onKeyDown={handleEnter} ref={input} type="text" placeholder="Search" />
                  <FaSearch className={`search position-absolute ${color}`} onClick={handleInputNav} />
                </Form>
              </div>
              <Nav.Link as={Link} to="#">
                <img width="38" height="48" className="" src="https://img.icons8.com/color/48/great-britain.png" alt="great-britain" onClick={handleFlagEng} />
              </Nav.Link>
              <Nav.Link as={Link} to="#">
                <img width="38" height="48" className="" src="https://img.icons8.com/color/48/indonesia.png" alt="indonesia" onClick={handleFlagInd} />
              </Nav.Link>
              <Nav.Link as={Link} to="#">
                <img width="30" height="30" className="rounded-circle" src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" alt="instagram-new--v1" style={{ backgroundColor: "white", padding: 4 }} />
              </Nav.Link>
              <Nav.Link as={Link} to="#">
                <img width="30" height="30" className="rounded-circle" src="https://img.icons8.com/ios/50/000000/tiktok--v1.png" style={{ backgroundColor: "white", padding: 4, scale: 0.5 }} alt="tiktok--v1" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
}
