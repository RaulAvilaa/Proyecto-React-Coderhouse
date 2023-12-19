import ItemCard from '../ItemCard/ItemCard';


const ItemList = ({ productos }) => {
    return (
        <section className='container mx-auto mt-8'>

            <h2 className="text-4xl font-bold text-center mb-6">Productos</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center'>
                {productos.map((item) => <ItemCard key={item.id} item={item} />)}
            </div>
        </section>
    );
};

export default ItemList;