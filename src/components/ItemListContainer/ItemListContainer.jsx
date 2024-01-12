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
            .finally(() => setLoading(false));
    }, [categoryId]);

    return (
        <>
            {
                loading
                    ? <Loading />
                    : <ItemList productos={productos} />
            }
        </>
    )
};

export default ItemListContainer;