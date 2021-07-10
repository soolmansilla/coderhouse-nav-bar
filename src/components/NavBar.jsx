import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
const NavBar = () => {

    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Zara</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">MUJER</Nav.Link>
            <Nav.Link href="#">HOMBRE</Nav.Link>
            <Nav.Link href="#">NIÑOS</Nav.Link>
            <Nav.Link href="#">SHOES & BAGS</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">Iniciar sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


    )
}

export default NavBar;