"use client"

import { useRouter } from "next/navigation"
import Boton from "./components/Boton"
import { useEffect } from "react";

const Error = ({error, reset}) => {
    const router = useRouter();

    useEffect(() => {
        console.log("Error:", error);
    }, [error])

    return (
        <div className="container m-auto flex flex-col w my-20 text-center">
            <h1 className="text-3xl font-black mb-5">Error en la Página!</h1>
            <h3 className="text-2xl font-black mb-5">Por favor, intente en unos minutos!</h3>
            <Boton onClick={() => {router.replace("/")}}>Ir a la Página Principal</Boton>
        </div>
    )
}

export default Error