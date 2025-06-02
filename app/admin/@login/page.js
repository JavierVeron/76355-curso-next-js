"use client"

import Boton from "@/app/components/Boton"
import { AuthContext } from "@/app/context/AuthContext";
import { useContext, useState } from "react"

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [registrar, setRegistrar] = useState(false);
    const {user, logInUser, logOutUser, createUser, googleLogin} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const values = {email, password};
        registrar ? createUser(values) : logInUser(values);
        setError(user.logged ? "" : "Ingrese los datos del Usuario y Contraseña correctamente!");
    }

    const registrarme = () => {
        setRegistrar(true);
    }

    return (
        <div className="container m-auto flex flex-col my-20">
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <h1 className="text-3xl font-black mb-5">{registrar ? "Registrar Usuario" : "Iniciar Sesión"}</h1>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese su Email" required value={email} onInput={(e) => {setEmail(e.target.value)}} />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                    <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese su Contraseña" required value={password} onInput={(e) => {setPassword(e.target.value)}} />
                </div>
                <div className="mb-1">
                    <Boton type="submit">{registrar ? "Registrar Usuario" : "Iniciar Sesión"}</Boton>
                </div>
                <div className="mb-1">
                    <Boton onClick={registrarme}>Registrarme</Boton>
                </div>
                <div className="mb-1">
                    <Boton onClick={googleLogin}>Registrarme con Google</Boton>
                </div>
            </form>
            {error ? <div className="p-4 my-5 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 text-center" role="alert"><span className="font-medium">Error!</span> {error}</div> : ""}
        </div>
    )
}

export default LoginPage