import './NavBar.css';
import logo from './logo.png'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav>
            <div className="containerNav">
                <a href={'index.html'}><img src= {logo} alt=""/></a>
                <ul>
                    <li><a href={'index.html'}>Inicio</a></li>
                    <li><a href={'index.html'}>Productos</a></li>
                    <li><a href={'index.html'}>Contacto</a></li>
                </ul>
                <CartWidget />
            </div>
            
        </nav>
    )
}

export default NavBar
