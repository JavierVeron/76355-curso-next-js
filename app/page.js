import Counter from "./Clase1/Counter";
import Curso from "./Clase1/Curso";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Curso nombre={"Curso de JavaScript"} tipoCurso={"programacion"} />
        <p className="font-light text-3xl">Hola Mundo!</p>
        <Counter />
      </main>
    </div>
  );
}
