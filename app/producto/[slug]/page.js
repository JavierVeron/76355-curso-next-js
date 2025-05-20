import productos from "../../data/productos.json";
import ProductDetail from "@/app/components/ProductDetail";

export async function generateMetadata({params, searchParams}, parent) {
    const {slug} = await params;
    const item = productos.find(item => item.slug == slug);

    return {
        title:`${item.titulo} | Chevrolet Sitio Oficial`
    }
}

const Productos = async ({params}) => {   
    const {slug} = await params;
    const item = productos.find(item => item.slug == slug);

    return (
        <ProductDetail item={item} />
    )
}

export default Productos