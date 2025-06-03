import ProductList from "@/app/components/ProductList";
import { Suspense } from "react";

export async function generateMetadata({params, searchParams}, parent) {
    let {categoria} = await params;
    categoria = categoria == "all" ? "Productos" : categoria;

    return {
        title:`${categoria} | Chevrolet Sitio Oficial`,
        description: `Querés saber más acerca de nuestros ${categoria}? Enterate más!`
    }
}

export async function generateStaticParams() {
    return [
        {categoria:"all"},
        {categoria:"autos"},
        {categoria:"suvs"},
        {categoria:"pick-ups"}
    ]
}

const Productos = async ({params}) => {   
    const {categoria} = await params;    

    return (
        <Suspense fallback={<div className="p-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 text-center my-20" role="alert"><span className="font-medium">Cargando...</span></div>}>
            <ProductList categoria={categoria} />
        </Suspense>
    )
}

export default Productos