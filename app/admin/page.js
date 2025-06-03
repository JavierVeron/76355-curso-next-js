import Boton from "@/app/components/Boton"
import Link from "next/link";

const ListPage = async () => {
    const response = await fetch("http://localhost:3000/api/productos/all");
    const items = await response.json();

    return (
        <div className="container m-auto flex flex-col my-20">
            <table>
                <tbody>
                    <tr>
                        <td colSpan={6} className="px-6 py-4 text-end"><Link href={"/admin/create"} >Agregar</Link></td>
                    </tr>
                    {
                        items.map(item => (
                            <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <td className="px-6 py-4"><img src={item.imagen} alt={item.titulo} width={80} /></td>
                                <td className="px-6 py-4">{item.titulo}</td>
                                <td className="px-6 py-4">{item.titulo2}</td>
                                <td className="px-6 py-4">${item.precio}</td>
                                <td className="px-6 py-4">{item.categoria}</td>
                                <td className="px-6 py-4 text-end"><Boton>Editar</Boton> <Boton>Eliminar</Boton></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListPage