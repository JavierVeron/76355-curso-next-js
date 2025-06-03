import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthContextProvider from "./context/AuthContext";
import CartContextProvider from "./context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Chevrolet Sitio Oficial | Autos, Camionetas, 4X4, Pick Up, SUV, y Autos Familiares",
  description: "En el sitio oficial Chevrolet podés encontrar todos los modelos de: Autos, Camionetas, 4X4, Pick Ups y muchos más. Descubrí el modelo de tus sueños.",
  keywords: ["chevrolet", "chevrolet argentina", "chevrolet autos", "chevrolet suv", "chevrolet pickups"]
};

export default async function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthContextProvider>
          <CartContextProvider>
            <Navbar />
            {children}
            <Footer />
          </CartContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
