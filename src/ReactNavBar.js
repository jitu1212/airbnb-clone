import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NavItem } from "react-bootstrap";
import { Avatar } from "@mui/material";


import './ReactSearchBar.css'
function ReactNavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" >
      <Container fluid >
        <Navbar.Brand href="#home">
          <a href="/">
            <img
              src="https://www.blueskycabinrentals.com/custimages/pages/airbnb-logo-white-on-black-300x90.png"
              style={{ height: "50px" }} alt="HomePage"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         
          <Nav className="justify-content-center flex-grow-1 pe-3">
            <Nav.Link href="/place"> <p className="span-section">Places to stay</p> </Nav.Link>
            <Nav.Link href="/"><p className="span-section">Online Experiens</p></Nav.Link>
            <Nav.Link href="/"><p className="span-section">Experiences</p></Nav.Link>
          </Nav>
         
          <Nav className="header__right">
          <NavItem> <span id="header_p">Become a host</span> <span><LanguageIcon /></span> <span><ExpandMoreIcon /></span></NavItem>
           
            <Avatar  />
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}

export default ReactNavBar;
