"use client"

import Boton from "@/app/components/Boton";
import { db, storage } from "@/app/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react"

const CreateProduct = () => {
    const [titulo, setTitulo] = useState("Trailblazer 2025");
    const [titulo2, setTitulo2] = useState("Una experiencia única para todos a bordo");
    const [descripcion, setDescripcion] = useState("La <b>Chevrolet Trailblazer 2025</b> cuenta con todo lo que buscás en una SUV 4x4 de 7 lugares y con 5 años de garantía: <b>fuerza, sofisticación, rendimiento y conectividad</b>. Con un nuevo diseño y equipada con lo más avanzado en tecnología y seguridad, esta nueva versión High Country está brutalmente lista para todo.");
    const [precio, setPrecio] = useState(65218900);
    const [imagen, setImagen] = useState("");
    const [categoria, setCategoria] = useState("suvs");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const product = {titulo, titulo2, descripcion, precio, imagen, categoria};
        console.log(product);
        const productosRef = collection(db, "productos");
        const fileName = imagen.split("\\").pop();
        const storageRef = ref(storage, fileName);       
        const metadata = {contentType:'image/jpg'};    
        const fileSnapshot = await uploadBytes(storageRef, imagen, metadata);
        const fileUrl = await getDownloadURL(fileSnapshot.ref);
        addDoc(productosRef, {...product, imagen:fileUrl});
        console.log("Se agregó el Producto!");
    }

    return (
        <div className="container m-auto flex flex-col my-20">
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit} method="post">
                <h1 className="text-3xl font-black mb-5">Cargar Producto</h1>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese Título" /* required */ value={titulo} onInput={(e) => {setTitulo(e.target.value)}} />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título #2</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese Título #2" /* required */ value={titulo2} onInput={(e) => {setTitulo2(e.target.value)}} />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese Descripción" /* required */ value={descripcion} onInput={(e) => {setDescripcion(e.target.value)}} />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese Precio" /* required */ value={precio} onInput={(e) => {setPrecio(e.target.value)}} />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Imagen</label>
                    <input type="file" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese Imagen" /* required */ value={imagen} onInput={(e) => {setImagen(e.target.value)}} />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoría</label>
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={categoria} onChange={(e) => {setCategoria(e.target.value)}}>
                        <option value={"autos"}>Autos</option>
                        <option value={"suvs"}>Suvs</option>
                        <option value={"pick-ups"}>Pick-Ups</option>
                    </select>
                </div>
                <Boton type="submit">Enviar</Boton>
            </form>
        </div>
    )
}

export default CreateProduct