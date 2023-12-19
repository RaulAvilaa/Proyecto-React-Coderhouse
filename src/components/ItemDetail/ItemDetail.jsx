import Button from "../../Utils/Button";


const ItemDetail = ({ item }) => {
    return (
        <div className="container m-auto mt-8">
            <div className="gap-8 pt-4 Grid-ID">
                <figure className="flex justify-center">
                    <img className='w-72 max-h-72 object-cover rounded-md mb-4' src={item.img} alt={item.name} />
                </figure>


                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="font-mono p-4">{item.description}</p>
                    <p className="text-gray-700 text-lg font-semibold">Precio: ${item.price}</p>

                    <Button className='bg-orange-600 text-white px-4 py-2 mt-2 rounded-md'>Agregar al carrito</Button>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;