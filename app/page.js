import Script from "next/script"
import ProductList from "./components/ProductList"

export default async function Home() {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></Script>
      <ProductList categoria={"all"} />
    </>
  )
}
