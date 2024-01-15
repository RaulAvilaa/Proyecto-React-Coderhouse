import ItemCard from '../ItemCard/ItemCard';
import { useParams } from 'react-router-dom';


const ItemList = ({ productos }) => {
    const { categoryId } = useParams()

    return (
        <section className='container mx-auto mt-8'>

            <h2 className="text-4xl font-bold text-center mb-6">
                {!categoryId ? "Todos los productos" : categoryId.toUpperCase()}
            </h2>
            <hr className="mb-8"/>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center'>
                {productos.map((item) => <ItemCard key={item.id} item={item} />)}
            </div>
        </section>
    );
};

export default ItemList;