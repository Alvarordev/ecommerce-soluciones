/* eslint-disable @next/next/no-img-element */
import Container from "@/components/container";
import ProductCard from "@/components/product-card";
import { raleway } from "@/lib/fonts";
import supabase from "@/supabase";
import { randomInt } from "crypto";

const products = [
  {
    id: 1,
    name: "Iphone 15 Pro",
    slug: "iphone-15-pro",
    price: 4990.0,
    imgUrl: "./iphone-15-pro.webp",
  },
  {
    id: 2,
    name: "Mac mini M2",
    slug: "mac-mini-m2",
    price: 3000.0,
    imgUrl: "./mac-mini-transparente.png",
  },
  {
    id: 3,
    name: "Galaxy Tab S8+",
    slug: "galaxy-tab-s8",
    price: 3100.0,
    imgUrl: "./galaxy-tab-s8.png",
  },
  {
    id: 4,
    name: "Apple watch s8",
    slug: "apple-watch-s8",
    price: 1900.0,
    imgUrl: "./apple-watch-s8.png",
  },
];

const Home = async () => {
  let { data, error } = await supabase
    .from("product")
    // This stupidity is here just because of caching
    // for some reason, supabase underlying calls are being cached
    // unless we add this random string to the query...
    .select(`*`);

  console.log(data);

  return (
    <Container className="min-h-screen">
      <section className="w-full">
        <div className="w-full mt-4">
          <img
            className="object-cover object-top h-[550px] w-full rounded-lg"
            src="./mac-mini.jpg"
            alt="banner-img"
          />
        </div>
      </section>

      <section className="my-16 flex flex-col px-4 xl:px-0">
        <header className="flex flex-col w-full items-center gap-2 mb-10 text-center">
          <h3 className={`text-3xl font-bold ${raleway.className}`}>
            Nuevos Productos
          </h3>
          <p className="text-sm text-muted-foreground">
            Traemos los ultimos productos en tecnologia a precios accesibles
          </p>
        </header>

        <main>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-16">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </section>
    </Container>
  );
};

export default Home;
