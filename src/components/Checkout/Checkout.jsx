import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, writeBatch, addDoc, query, where, documentId, getDocs } from "firebase/firestore";
import Swal from "sweetalert2";

const Checkout = () => {
    const { cart, totalCart, clearCart } = useContext(CartContext);

    const [values, setValues] = useState({
        nombre: "",
        direccion: "",
        email: "",
    });

    const [orderId, setOrderId] = useState(null);

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const orden = {
            cliente: values,
            items: cart,
            total: totalCart(),
            fecha: new Date(),
        };

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders");
        const productsRef = collection(db, 'productos')
        const itemsQuery = query(productsRef, where(documentId(), 'in', cart.map(prod => prod.id)))
        console.log(cart.map(prod => prod.id))
        const querySnapshot = await getDocs(itemsQuery)

        const outOfStock = []

        querySnapshot.docs.forEach(doc => {
            const item = cart.find(prod => prod.id === doc.id)
            const stock = doc.data().stock

            if (stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordersRef, orden).then((doc) => {
                        setOrderId(doc.id)
                        clearCart()

                        Swal.fire("¡Gracias por tu compra!")
                    });
                })
        } else {
            Swal.fire("Hay items sin stock")
        }

    };

    if (orderId) {
        return (
            <div className="container m-auto mt-10">
                <h2 className="text-4xl font-semibold">Orden completada!</h2>
                <hr />
                <p className="mt-4 ml-2">Tu código de orden es: {orderId}</p>
            </div>);
    }

    return (
        <div className="container m-auto mt-10">
            <h2 className="text-4xl font-semibold">Orden de compra</h2>
            <hr />

            <form onSubmit={handleSubmit}
                className="flex flex-col gap-4 max-w-md mt-8">
                <h4>Ingresa tus datos para la compra:</h4>

                <input
                    className="border p-2"
                    type="text"
                    placeholder="Nombre"
                    onChange={handleInputChange}
                    value={values.nombre}
                    name="nombre"
                />

                <input
                    className="border p-2"
                    type="text"
                    placeholder="Dirección"
                    onChange={handleInputChange}
                    value={values.direccion}
                    name="direccion"
                />

                <input
                    className="border p-2"
                    type="text"
                    placeholder="Email"
                    onChange={handleInputChange}
                    value={values.email}
                    name="email"
                />

                <button className="bg-orange-500 text-white py-2" type="submit">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Checkout;