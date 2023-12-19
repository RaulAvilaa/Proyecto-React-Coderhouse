import { useEffect } from 'react';
import { zoomies } from 'ldrs';

// Registra el componente de zoomies
zoomies.register();

const Loading = () => {
    useEffect(() => {
        // Espera a que el contenido del DOM esté cargado
        document.addEventListener("DOMContentLoaded", function () {
            const timer = setTimeout(() => {
                const loaderContainer = document.querySelector(".loader-container");
                if (loaderContainer) {
                    loaderContainer.style.display = "none";
                }
            }, 1500);

            // Limpia el temporizador al desmontar el componente
            return () => clearTimeout(timer);
        });
    }, []); // El segundo argumento del useEffect es un array de dependencias, [] significa que se ejecutará solo una vez al montar el componente

    return (
        <div className="flex flex-col items-center justify-start h-screen">
            <h2 className="text-center text-4xl mt-16">Cargando productos...</h2>
            <div className="loader-container p-8">
                {/* Agrega clases específicas para zoomies */}
                <l-zoomies
                    className="w-16 h-16"  // Establece el tamaño del componente
                    size="80"
                    stroke="5"
                    bg-opacity="0.1"
                    speed="1.4"
                    color="black"
                ></l-zoomies>
            </div>
        </div>
    );
};

export default Loading;