import { Link } from 'react-router-dom';
import logo from '../../assets/logo-no-background.svg';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <header className="bg-blue-900">
            <div className="container mx-auto py-3 flex items-center justify-between">
                <div className="flex-shrink-0">
                    <Link to="/" className="brand-link"><img src={logo} alt="Logo" className="h-auto" /></Link>
                </div>
                <nav className="flex-grow flex justify-center space-x-4">
                    <Link className="text-white hover:text-orange-600 text-lg uppercase font-semibold" to="/productos/Equipos Armados">Equipos Armados</Link>
                    <Link className="text-white hover:text-orange-600 text-lg uppercase font-semibold" to="/productos/Monitores">Monitores</Link>
                    <Link className="text-white hover:text-orange-600 text-lg uppercase font-semibold" to="/productos/Periféricos">Periféricos</Link>
                    <Link className="text-white hover:text-orange-600 text-lg uppercase font-semibold" to="/productos/Contacto">Contacto</Link>
                </nav>
                <CartWidget className="flex-shrink-0" />
            </div>
        </header>
    )
}

export default Navbar