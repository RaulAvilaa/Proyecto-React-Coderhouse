import Button from "../../Utils/Button"
import { Link } from "react-router-dom"



const EmptyCart = () => {

    return (
        <section className="container mx-auto mt-8">
                <h2 className="text-4xl font-semibold">Tu carrito está vacío</h2>
                <hr />
                <p className="mt-5 mb-5">Agrega algún producto al carrito </p>
                <Button>
                    <Link to={"/"}>Volver</Link>
                </Button>
            </section>
        )
}

export default EmptyCart