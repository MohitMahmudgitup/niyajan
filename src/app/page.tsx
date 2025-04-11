import Hero from "@/components/header/Hero";
import { getData } from "@/helpers";




export default async function Home() {
  const url = "https://dummyjson.com/products";
  const product = await getData(url);
  console.log(product.products)
  return (
    <main>
      <Hero/>
    </main>
  );
}
