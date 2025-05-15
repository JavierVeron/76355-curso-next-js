import Image from "next/image"
import hamburguesa from "./hamburguesa-tasty.png"

const Imagenes = () => {
    return (
        <div>
            <p>Utilizando la etiqueta html <b>img</b></p>
            <img src="https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kqX093YV/200/200/original?country=ar" alt="Hamburguesa Tasty" />
            <p>Importando la imagen del lado del servidor</p>
            <Image src={hamburguesa} alt="Hamburguesa Tasty" width={300} height={225} />
            <p>Especificando la ruta relativa <b>public</b></p>
            <Image src={"/images/hamburguesa-tasty.png"} alt="Hamburguesa Tasty" width={300} height={225} />
            <p>Especificando la ruta absoluta</p>
            <Image src={"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kqX093YV/200/200/original?country=ar"} alt="Hamburguesa Tasty" width={300} height={225} />
        </div>
    )
}

export default Imagenes