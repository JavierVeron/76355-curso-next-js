import Link from "next/link"

const MenuList = ({open, handleClose}) => {
    return (
        <div className={`${open ? "opacity-100 visible" : "opacity-0 invisible"} transition-all fixed inset-0 bg-black/50 flex justify-end`}>
            <aside className={`${open ? "" : "translate-x-50"} transition-all w-48 bg-gray-500`}>
                <div className="text-white p-5" onClick={handleClose}>[ X ]</div>
                <nav className="flex flex-col py-5">
                    <Link href={"/nosotros"} className="text-white p-5">Nosotros</Link>
                    <Link href={"/productos/all"} className="text-white p-5">Productos</Link>
                    <Link href={"/productos/autos"} className="text-white p-5">Autos</Link>
                    <Link href={"/productos/suvs"} className="text-white p-5">Suvs</Link>
                    <Link href={"/productos/pick-ups"} className="text-white p-5">Pick-Ups</Link>
                    <Link href={"/carrito"} className="text-white p-5">Carrito</Link>
                    <Link href={"/admin"} className="text-white p-5">Administrador</Link>
                    <Link href={"/contacto"} className="text-white p-5">Contacto</Link>
                </nav>
            </aside>
        </div>
    )
}

export default MenuList