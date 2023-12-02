import { data } from '../../data';
import PropTypes from 'prop-types';

export const ItemListContainer = (props) => {
    return (
        <>
            <h1 className='text-3xl font-bold text-center my-8 mb-8'>{props.greeting}</h1>
            <div className='container-items flex flex-col md:flex-row items-center justify-center my-8 gap-5'>
                {data.map(product => (
                    <div className='item bg-gray-100 p-4 rounded-md flex flex-col items-center' key={product.id}>
                        <figure>
                            <img className='w-72 max-h-72 object-cover rounded-md mb-4' src={product.img} alt={product.nameProduct} />
                        </figure>
                        <div className='info-product text-center'>
                            <h2 className='text-lg font-bold'>{product.nameProduct}</h2>
                            <p className='text-gray-700 text-lg font-semibold'>${product.price}</p>
                            <p className='text-gray-800 mb-4'>{product.description}</p>
                            <button className='bg-indigo-500 text-white px-4 py-2 mt-2 rounded-md'>Añadir al carrito</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
};

export default ItemListContainer