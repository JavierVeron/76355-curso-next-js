"use client"

import { useRouter } from "next/navigation";
import Boton from "./components/Boton";

const Error404 = () => {
    const router = useRouter();

    return (
        <div className="container m-auto my-20 text-center">
            <h1 className="text-3xl font-black">Error 404!</h1>
            <h3 className="text-3xl">Lo sentimos, pero no encontramos la página solicitada.</h3>
            <Boton title={"Volver atrás"} onClick={() => {router.replace("/")}}>Ir a la Página Principal</Boton>
        </div>
    )
}

export default Error404