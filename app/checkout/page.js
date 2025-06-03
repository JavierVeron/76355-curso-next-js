"use client"

import Boton from "../components/Boton";
import { useRouter } from "next/navigation"
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
    const {cart, clearCart, totalItems, sumItems, generateOrder} = useContext(CartContext);
    const router = useRouter();
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    if (orderId) {
        return (
            <div className="container m-auto text-center my-20">
                <h1 className="text-3xl font-black">Gracias por tu Compra!</h1>
                <h3 className="text-2xl">Tu ID de Compra es: <b>{orderId}</b></h3>
                <Boton title={"Ir a la Página Principal"} onClick={() => {router.replace("/")}}>Ir a la Página Principal</Boton>
            </div>
        )
    }

    if (totalItems() == 0) {
        return (
            <div className="container m-auto text-center my-20">
                <h1 className="text-3xl font-black">El Carrito está vacío!</h1>
                <Boton title={"Volver atrás"} onClick={() => {router.back()}}>Volver atrás</Boton>
            </div>
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setOrderId(await generateOrder(nombre, email, telefono));
        clearCart();
        console.log("Se creó el Carrito con el Id #" + orderId);
    }

    return (
        <div className="container m-auto flex flex-row justify-center my-20">
            <div>
                <form className="max-w-sm mx-auto" onSubmit={handleSubmit} method="post" >
                    <h1 className="text-3xl font-black mb-5">Generar Orden</h1>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese Nombre" value={nombre} onInput={(e) => {setNombre(e.target.value)}} />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese Email" value={email} onInput={(e) => {setEmail(e.target.value)}} />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese Teléfono" value={telefono} onInput={(e) => {setTelefono(e.target.value)}} />
                    </div>
                    <Boton type="submit">Enviar</Boton>
                </form>
            </div>
            <div>
                <table>
                    <tbody>
                        {
                            cart.map(item => (
                                <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                    <td className="px-6 py-4"><img src={item.imagen} alt={item.titulo} width={80} /></td>
                                    <td className="px-6 py-4">{item.titulo}</td>
                                    <td className="px-6 py-4">${item.precio}</td>
                                    <td className="px-6 py-4">x{item.cantidad}</td>
                                    <td className="px-6 py-4">${item.precio * item.cantidad}</td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td colSpan={4} className="px-6 py-4"><b>Total a Pagar</b></td>
                            <td className="px-6 py-4"><b>${sumItems()}</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )    
}

export default Checkout