import { useContext, useState } from "react";
import "./LoginScreen.scss";
import { UserContext } from "../../context/UserContext";

const LoginScreen = () => {
    const { login, register, googleLogin } = useContext(UserContext);

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        login(values);
    };

    return (
        <div className="login-container">
            <div className="p-8 rounded bg-white">
                <h2 className="text-2xl font-semibold w-80">Iniciar Sesión</h2>
                <hr />

                <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
                    <input
                        className="border p-2"
                        type="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleInputChange}
                        name="email"
                    />
                    <input
                        className="border p-2"
                        type="password"
                        placeholder="Contraseña"
                        value={values.password}
                        onChange={handleInputChange}
                        name="password"
                    />

                    <button type="submit" className="bg-orange-500 text-white rounded py-2">
                        Ingresar
                    </button>
                </form>

                <button
                    onClick={googleLogin}
                    className="bg-orange-500 text-white rounded p-2 mt-4"
                >Iniciar sesión con Google</button>
                <br />
                <button
                    onClick={() => register(values)}
                    className="bg-orange-500 text-white rounded p-2 mt-4"
                >Registrarse</button>
                <br />
            </div>
        </div>
    );
};

export default LoginScreen;