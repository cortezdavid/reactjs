import './NavBar.css';
import logo from './logo.png'
import CartWidget from '../CartWidget/CartWidget';
import {NavDropdown, Navbar, Nav, Container} from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar expand="lg" className='fixed-top'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Link to='/'><img src= {logo} alt="" className='logo'/></Link>
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                <Nav>
                    <Nav.Link as={ NavLink } to='/'>Inicio</Nav.Link>
                    <NavDropdown title="Categoria" id="basic-nav-dropdown">
                        <NavDropdown.Item as={ NavLink } to='/category/DC'>DC</NavDropdown.Item>
                        <NavDropdown.Item as={ NavLink } to='/category/Marvel'>Marvel</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <Link to='/cart'><CartWidget /></Link>
            </Container>
        </Navbar>
    )
}

export default NavBar
