import logo from '../../assets/logo-no-background.svg';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Button from '../../Utils/Button';

const Navbar = () => {
    const { user, logout } = useContext(UserContext)

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

            {user.logged && (
                <div className="flex items-center justify-end container mx-auto mt-4">
                    <p className="text-white mr-3">{user.email}</p>
                    <Button onClick={logout} className="bg-orange-600 text-white px-4 py-1 rounded">
                        Cerrar sesión
                    </Button>
                </div>
            )}
        </header>
    );
};


export default Navbar