import { Link } from 'react-router-dom';
import Button from '../../Utils/Button';

const ItemCard = ({ item }) => {
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return (
        <article className='item bg-gray-100 rounded-md mx-auto my-2 shadow-lg shadow-gray-700 p-4 hover:scale-110'>
            <figure className="flex justify-center">
                <img className='w-72 max-h-72 object-cover rounded-md mb-4' src={item.img} alt={item.name} />
            </figure>
            <h3 className='text-lg font-bold text-center'>{item.name}</h3>
            <hr />
            <p className='text-gray-800 mb-4 text-center'>Entra al producto para saber más en detalle</p>

            {item.stock <= 10 && <p className='font-bold text-center text-red-500'>¡Quedan {item.stock} unidades!</p>}

            <p className='text-lg font-bold text-center text-gray-800'>Precio: {USDollar.format(item.price)}</p>
            <Button className='bg-blue-900 text-white px-4 py-2 mt-2 rounded-md block mx-auto'>
                <Link to={`/item/${item.id}`}>Ver más</Link>
            </Button>
        </article>
    );
};

export default ItemCard;