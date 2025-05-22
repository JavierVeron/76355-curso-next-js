"use client"

import { useState } from "react"
import Boton from "../components/Boton"

const Contacto = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [consulta, setConsulta] = useState("");
    const [dataForm, setDataForm] = useState("");

    const vaciarCampos = () => {
        setNombre("");
        setEmail("");
        setConsulta("");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(nombre, email, consulta);
        const response = await fetch("http://localhost:3000/api/contacto/", {
            method:"POST",
            headers:{'Content-type': 'application/json; charset=UTF-8'},
            body:JSON.stringify({nombre, email, consulta})
        });
        const data = await response.json();
        setDataForm(data);
        vaciarCampos();
    }

    return (
        <div className="container m-auto my-20">
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit} >
                <div className="mb-5">
                    <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese su Nombre" required value={nombre} onInput={(e) => {setNombre(e.target.value)}} />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese su Email" required value={email} onInput={(e) => {setEmail(e.target.value)}} />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Consulta</label>
                    <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese su Consulta" required value={consulta} onInput={(e) => {setConsulta(e.target.value)}} />
                </div>
                <Boton type="submit">Enviar</Boton>
                {dataForm && <div className="p-4 my-5 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">{dataForm}</div>}
            </form>
        </div>
    )
}

export default Contacto