import ProductCard from "@/app/components/ProductCard";
import productos from "../../data/productos.json";

export async function generateMetadata({params, searchParams}, parent) {
    return {
        title:`${params} | Chevrolet Sitio Oficial`
    }
}

const Productos = async ({params}) => {   
    const {categoria} = await params;
    const items = categoria ? productos.filter(item => item.categoria == categoria) : productos;

    return (
        <section className="container flex flex-row m-auto my-20">
            {
                items.map(item => (
                    <ProductCard key={item.slug} item={item} />
                ))
            }
        </section>
    )
}

export default Productos