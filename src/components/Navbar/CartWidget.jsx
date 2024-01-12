import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import '../../styles/CartWidget.css';

const CartWidget = () => {
    const { itemsInCart } = useContext(CartContext)

    return (
        <Link to="/cart" className={`${itemsInCart() === 0 ? 'invisible opacity-0' : 'visible opacity-100'} transition-all flex items-center gap-1 cursor-pointer`}>
            <FontAwesomeIcon icon={faShoppingCart} className="fa-cart-shopping" style={{ color: 'white' }} />
            <span className='text-white text-2x1'>{itemsInCart()}</span>
        </Link>

    )
};

export default CartWidget;