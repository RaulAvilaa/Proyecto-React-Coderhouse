const QuantitySelector = ({ cantidad, stock, setCantidad }) => {

    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1);
    };

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    };

    return (
        <div className="flex gap-4 items-center">
            <button
                onClick={handleRestar}
                className={`${cantidad === 1 ? 'bg-orange-300' : 'bg-orange-500'} rounded py-2 px-4 mt-2 text-white font-semibold`}

                disabled={cantidad === 1}
            >
                -
            </button>

            <span>{cantidad}</span>
            <button
                onClick={handleSumar}
                className={`${cantidad === stock ? 'bg-orange-300' : 'bg-orange-500 rounded'} rounded py-2 px-4 mt-2 text-white font-semibold`}

                disabled={cantidad === stock}
            >
                +
            </button>
        </div>
    );
};

export default QuantitySelector;


// Esto se creo nuevo, ver si se deja o se borra todo el archivo, de momento funciona. 