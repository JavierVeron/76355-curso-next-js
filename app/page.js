"use client"

import Boton from "./components/Boton";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  const saludar = () => {
    alert("hola")
  }
  return (
    <>
      <Navbar />
      <Boton title={"Esto es un Botón"} onClick={saludar}>
        Solicitar Test Drive
      </Boton>
      <Footer />
    </>
  );
}
