import './NavBar.css';
import logo from './logo.png'

const NavBar = () => {
    return (
        <nav>
            <div className="containerNav">
                <a href={'index.html'}><img src= {logo} alt=""/></a>
                <ul>
                    <li><a href={'index.html'}>Inicio</a></li>
                    <li><a href={'index.html'}>Productos</a></li> {/*puse el mismo enlace porque me aparecia una especie de error cuando ponia '#'*/}
                    <li><a href={'index.html'}>Contacto</a></li>
                </ul>
            </div>
            
        </nav>
    )
}

export default NavBar
