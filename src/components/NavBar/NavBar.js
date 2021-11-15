import './NavBar.css';
import logo from './logo.png'
import CartWidget from '../CartWidget/CartWidget';
import {NavDropdown} from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <div className="containerNav">
                <Link to='/'><img src= {logo} alt="" className='logo'/></Link>
                <ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li>
                        <NavDropdown title="Categoría" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to='/category/DC'>DC</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/category/Marvel'>Marvel</NavDropdown.Item>
                        </NavDropdown>
                    </li>
                </ul>
                <Link to='/cart' className='cart'><CartWidget /></Link>
            </div>
            
        </nav>
    )
}

export default NavBar
