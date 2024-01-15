import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from '../Loading/Loading';
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(null);

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        // 1- armar la referencia
        const docRef = doc(db, 'productos', itemId)
        // 2- Llamar a la ref
        getDoc(docRef)
            .then((docSnapshot) => {
                const doc = {
                    ...docSnapshot.data(),
                    id: docSnapshot.id
                }

                setItem(doc)
            })
            .finally(() => setLoading(false))

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