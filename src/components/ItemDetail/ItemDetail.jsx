// import Button from "../../Utils/Button";
import { useContext, useState } from "react";
import QuantitySelector from "./QuantitySelector"
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Button from "../../Utils/Button";


const ItemDetail = ({ item }) => {
    const navigate = useNavigate()
    const [cantidad, setCantidad] = useState(1)
    const { addToCart, isInCart } = useContext(CartContext)

    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad, 
        }

        addToCart(itemToCart)
    }
    const handleVolver = () => {
        navigate(-1)
    }


    return (
        <div className="container m-auto mt-8">
            <Button onClick={handleVolver}>Volver</Button>
            <h3 className=" mt-8 text-2xl font-semibold">{item.name}</h3>
            <hr />


            <div className="flex justify-center mt-8">
                <img className='w-72 max-h-72 object-cover rounded-md mb-4' src={item.img} alt={item.name} />

                <div className="flex flex-col items-center justify-center">
                    <p className="font-semibold p-4">{item.description}</p>
                    <p className="text-xl font-bold">Precio: ${item.price}</p>

                    {
                        isInCart(item.id)
                            ? <Button><Link to="/cart">Terminar mi compra</Link></Button>
                            : <>
                                <QuantitySelector
                                    cantidad={cantidad}
                                    stock={item.stock}
                                    setCantidad={setCantidad}
                                />
                                <button onClick={handleAgregar} disabled={item.stock === 0} className="bg-orange-600 text-white px-4 py-2 mt-2 rounded-md hover:bg-orange-700 transition duration-200">Agregar al carrito</button>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;