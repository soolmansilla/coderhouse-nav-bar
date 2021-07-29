import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget'
const NavBar = () => {

    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <NavLink  to="/">Zara</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink  to="/category/mujer">MUJER</NavLink>
            <NavLink to="/category/hombre">HOMBRE</NavLink>
            <NavLink to="/category/ninios">NIÑOS</NavLink>
            <NavLink to="/category/shoesybags">SHOES & BAGS</NavLink>
          </Nav>
          <Nav>
            <NavLink to="/category/shoesybags">Iniciar sesión</NavLink>
          </Nav>
        </Navbar.Collapse>
         <CartWidget /> 
      </Navbar>

      
    )
}

export default NavBar;