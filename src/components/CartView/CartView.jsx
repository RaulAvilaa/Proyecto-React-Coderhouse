import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Button from "../../Utils/Button"
import trashIcon from '../../assets/trash.svg'
import EmptyCart from "./EmptyCart"



const CartView = () => {
    const { cart, totalCart, clearCart, removeItem } = useContext(CartContext)

    if (cart.length === 0) return <EmptyCart />

    return (
        <section className="container mx-auto mt-8">
            <h2 className="text-4xl font-semibold mb-4">Tu orden</h2>
            <hr />

            <ul className="flex flex-col gap-4">
                {cart.map((item) => (
                    <li key={item.id} className="flex gap-3 border-b my-4">
                        <img src={item.img} alt="Cart img" className="w-40" />
                        <div>
                            <h3 className="text-2xl">{item.name}</h3>
                            <p className="text-2xl font-bold">$ {item.price * item.cantidad}</p>
                            <p>Cantidad: {item.cantidad}</p>

                            <button className="bg-orange-500 hover:bg-orange-600 transition duration-200 rounded flex items-center justify-center py-2 px-4 text-center text-white font-semibold my-4" onClick={() => removeItem(item.id)}>
                                <img src={trashIcon} className="w-5 " alt="trash icon" />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <h4 className="text-4xl font-semibold mt-8">TOTAL: ${totalCart()}</h4>
            <Button onClick={clearCart}>Vaciar carrito</Button>
        </section >
    );
};

export default CartView