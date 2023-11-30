import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import '../../styles/CartWidget.css';

const CartWidget = () => {
    //la lógica va siempre antes del return
    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={faShoppingCart} className="fa-cart-shopping" style={{ color: 'white' }} />
            <div className="qty-display">0</div>
        </div>
    );
};

export default CartWidget;