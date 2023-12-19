import { data } from "./data";

const pedirProductos = () => {

    return new Promise((resolve, ) => {
        setTimeout(() => {
            resolve(data)
        }, 1500)
    })
};

export default pedirProductos;