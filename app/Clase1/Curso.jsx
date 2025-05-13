"use client"
import { useState } from "react"

const Curso = ({nombre, tipoCurso}) => {
    const [tipo, setTipo] = useState("programacion");

    if (tipo == tipoCurso) {
        nombre = "_" + nombre;
    }

    return (
        <h3 className={`curso ${tipo != tipoCurso ? "bg-sky-100" : ""}`}>{nombre}</h3>
    )
}

export default Curso