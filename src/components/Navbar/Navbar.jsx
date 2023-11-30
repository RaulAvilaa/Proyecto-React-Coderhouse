import logo from '../../assets/logo-no-background.svg'
import NavLink from './NavLink'
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <header className="bg-blue-900">
            <div className="container mx-auto py-3 flex items-center justify-between">
                {/* Logo a la izquierda */}
                <div className="flex-shrink-0">
                    <img src={logo} alt="Logo" className="h-auto" />
                </div>

                {/* NavLink en el centro */}
                <nav className="flex-grow flex justify-center space-x-4">
                    <NavLink href={"#"} text={"Equipos armados"} />
                    <NavLink href={"#"} text={"Monitores"} />
                    <NavLink href={"#"} text={"Periféricos"} />
                    <NavLink href={"#"} text={"Contacto"} />
                </nav>

                {/* CartWidget a la derecha */}
                <div className="flex-shrink-0">
                    <CartWidget />
                </div>
            </div>
        </header>
    );
};

export default Navbar