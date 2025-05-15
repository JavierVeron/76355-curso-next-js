import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
