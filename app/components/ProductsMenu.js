"use client"

import Link from "next/link";
import productos from "../data/productos.json";
import { usePathname } from "next/navigation";

const ProductsMenu = () => {
    const categoriasProductos = productos.map(item => item.categoria);
    const categoriasNombres = new Set(categoriasProductos);
    const categorias = Array.from(categoriasNombres);
    const categoria = usePathname().split("/")[2];

    return (
        <nav>
            <div className="container mx-auto flex flex-row items-start my-20">
                <ul className="font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    {
                        categorias.map(item => {
                            let destacado = (item == categoria) ? "font-black" : "";
                            
                            return (
                                <li key={item}>

                                    <Link href={"/productos/" + item} className={`block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 ${destacado}`} aria-current="page">{item.toUpperCase()}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default ProductsMenu