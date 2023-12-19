import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from "react"
import pedirProductos from '../../pedirProductos';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true);

        pedirProductos()
            .then((data) => {
                const items = categoryId
                    ? data.filter(prod => prod.category === categoryId)
                    : data;

                setProductos(items);
            })
            // .catch((error) => {
            //     console.error('Error fetching data:', error);
            // })
            .finally(() => setLoading(false));
    }, [categoryId]);


    return (
        <>
            {loading ? (
                    <Loading />
            ) : (
                <ItemList productos={productos} />
            )}

        </>
    )
}

export default ItemListContainer;








// import { Link } from 'react-router-dom';
// import { data } from '../../data';

// const ItemListContainer = (props) => {
//     return (
//         <>
//             <h1 className='text-3xl font-bold text-center my-8 mb-8'>{props.greeting}</h1>
//             <div className='container-items flex flex-col md:flex-row items-center justify-center my-8 gap-5'>
//                 {data.map(product => (
//                     <Link to={`/item/${product.id}`} key={product.id} className='item bg-gray-100 p-4 rounded-md flex flex-col items-center'>
//                         <figure>
//                             <img className='w-72 max-h-72 object-cover rounded-md mb-4' src={product.img} alt={product.nameProduct} />
//                         </figure>
//                         <div className='info-product text-center'>
//                             <h2 className='text-lg font-bold'>{product.nameProduct}</h2>
//                             <p className='text-gray-700 text-lg font-semibold'>${product.price}</p>
//                             <p className='text-gray-800 mb-4'>{product.description}</p>
//                             <button className='bg-indigo-500 text-white px-4 py-2 mt-2 rounded-md'>Ver más</button>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default ItemListContainer;