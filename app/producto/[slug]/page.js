import ProductDetail from "@/app/components/ProductDetail"

export async function generateMetadata({params, searchParams}, parent) {
    const {slug} = await params;
    const response = await fetch("http://localhost:3000/api/producto/" + slug, {
        cache:"no-store"
    });
    const item = await response.json();

    return {
        title:`${item.titulo} | Chevrolet Sitio Oficial`
    }
}

const Productos = async ({params}) => {   
    const {slug} = await params;
    const response = await fetch("http://localhost:3000/api/producto/" + slug, {
        cache:"no-store"
    });
    const item = await response.json();

    return (
        <ProductDetail item={item} />
    )
}

export default Productos