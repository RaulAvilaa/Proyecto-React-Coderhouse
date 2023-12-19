import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import pedirProductos from '../../pedirProductos';
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from '../Loading/Loading';

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(null);

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                const data = await pedirProductos();
                const selectedProduct = data.find(prod => prod.id === parseInt(itemId));

                if (selectedProduct) { setItem(selectedProduct) }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // // Limpia la suscripción al desmontar el componente
        return () => {
            // Cancela operaciones asíncronas pendientes aquí si es necesario
        };
    }, [itemId]);

    return (
        <>
            {loading ? (
                    <Loading />
            ) : (
                <ItemDetail item={item} />
            )}
        </>
    );
};

export default ItemDetailContainer;