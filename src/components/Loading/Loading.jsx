import { useEffect } from 'react';
import { zoomies } from 'ldrs';

zoomies.register();

const Loading = () => {
    useEffect(() => {
        document.addEventListener("DOMContentLoaded", function () {
            const timer = setTimeout(() => {
                const loaderContainer = document.querySelector(".loader-container");
                if (loaderContainer) {
                    loaderContainer.style.display = "none";
                }
            }, 1500);

            return () => clearTimeout(timer);
        });
    }, []); 

    return (
        <div className="flex flex-col items-center justify-start h-screen">
            <h2 className="text-center text-4xl mt-16">Cargando...</h2>
            <div className="loader-container p-8">

                <l-zoomies
                    className="w-16 h-16"  
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