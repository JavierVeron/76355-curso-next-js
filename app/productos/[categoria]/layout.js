import NavigationMenu from "@/app/components/NavigationMenu"

export const metadata = {
  title: "Productos | Chevrolet Sitio Oficial",
  description: "Acerca de Productos. En el sitio oficial Chevrolet podés encontrar todos los modelos de Autos.",
  keywords: ["chevrolet", "chevrolet argentina", "chevrolet autos", "chevrolet suv", "chevrolet pickups"]
};

export default function ProductosLayout({ children }) {
  return (
    <>
      <NavigationMenu />
      {children}
    </>
  );
}
