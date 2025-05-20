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
  title: "Nosotros | Chevrolet Sitio Oficial",
  description: "Acerca de Nosotros. En el sitio oficial Chevrolet podés encontrar todos los modelos de Autos.",
  keywords: ["chevrolet", "chevrolet argentina", "chevrolet autos", "chevrolet suv", "chevrolet pickups"]
};

export default function NosotrosLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
