import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Carrito | Chevrolet Sitio Oficial",
  description: "Carrito. En el sitio oficial Chevrolet podés encontrar todos los modelos de Autos.",
  keywords: ["chevrolet", "chevrolet argentina", "chevrolet autos", "chevrolet suv", "chevrolet pickups"]
};

export default function NosotrosLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
