import { useState } from 'react';
import { db } from "../../firebase/config";


const Contacto = () => {
    const [consulta, setConsulta] = useState({
        texto: '',
        numeroContacto: '',
        correoElectronico: ''
    });

    const handleChange = (e) => {
        setConsulta({
            ...consulta,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Guarda la consulta en Firebase
            const consultaRef = await db.collection('consultas').add(consulta);
            console.log('Consulta enviada con ID:', consultaRef.id);

            setConsulta({
                texto: '',
                numeroContacto: '',
                correoElectronico: ''
            });
        } catch (error) {
            console.error('Error al enviar la consulta a Firebase:', error);
        }
    };

    return (
        <div className="mx-4 mt-8">
            <h2 className="text-4xl font-bold text-center mb-6">CONTACTO</h2>
            <hr />

            {/* Formulario de consulta */}
            <form className="mt-5 mb-8 max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2">
                        Consulta:
                    </label>
                    <textarea
                        name="texto"
                        value={consulta.texto}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                        rows="4"
                        placeholder="Escribe tu consulta aquí"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2">
                        Número de contacto:
                    </label>
                    <input
                        type="tel"
                        name="numeroContacto"
                        value={consulta.numeroContacto}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Ingresa tu número de contacto"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2">
                        Correo electrónico:
                    </label>
                    <input
                        type="email"
                        name="correoElectronico"
                        value={consulta.correoElectronico}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Ingresa tu correo electrónico"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-800 text-white px-4 py-2 rounded-md"
                >
                    Enviar Consulta
                </button>
            </form>

            <div>
                <p className="text-lg text-center pt-4 font-bold mb-2">Información de contacto:</p>
                <p className="text-center pt-1">Número de contacto: +4532391342</p>
                <p className="text-center pt-1">Correo electrónico: TodoPc@info.com</p>
                <p className="text-center pt-1 pb-5 ">Dirección: Mercedes, Soriano, Uruguay</p>

            </div>
        </div>
    );
};

export default Contacto;