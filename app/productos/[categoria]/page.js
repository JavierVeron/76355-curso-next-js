import ProductList from "@/app/components/ProductList";

export async function generateMetadata({params, searchParams}, parent) {
    let {categoria} = await params;
    categoria = categoria == "all" ? "Productos" : categoria;

    return {
        title:`${categoria} | Chevrolet Sitio Oficial`
    }
}

const Productos = async ({params}) => {   
    const {categoria} = await params;    

    return (
        <ProductList categoria={categoria} />
    )
}

export default Productos