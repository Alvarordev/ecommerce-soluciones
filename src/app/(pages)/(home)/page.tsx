/* eslint-disable @next/next/no-img-element */
import Container from "@/components/container";
import { raleway } from "@/lib/fonts";
import { ShoppingBag } from "lucide-react";
import React from "react";

const products = [
  {
    id: 1,
    name: "Mac mini M2",
    price: "3000.00",
    imgUrl: './mac-mini-transparente.png'
  },
  {
    id: 2,
    name: "Galaxy Tab S8+",
    price: "3100.00",
    imgUrl: './galaxy-tab-s8.png'
  },
  {
    id: 3,
    name: "Apple watch 8",
    price: "1900.00",
    imgUrl: './apple-watch-s8.png'
  },
  {
    id: 4,
    name: "Iphone 15 Pro",
    price: "4990.00",
    imgUrl: './iphone-15-pro.webp'
  },
];

const Home = () => {
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

      <section className="my-16 flex flex-col">
        <header className="flex flex-col w-full items-center gap-2 mb-10">
          <h3 className={`text-3xl font-bold ${raleway.className}`}>
            Nuevos Productos
          </h3>
          <p className="text-sm text-muted-foreground">
            Traemos los ultimos productos en tecnologia a precios competitivos
          </p>
        </header>

        <main>
          <div className="grid grid-cols-[repeat(4,minmax(0,1fr))] gap-16">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col gap-4 items-center w-full"
              >
                <div className="h-80 w-full bg-secondary rounded-lg">
                  <img className="h-full w-full object-contain object-center" src={product.imgUrl} alt="" />
                </div>

                <div className="flex w-full justify-between">
                  <div className="flex flex-col gap-1 text-sm">
                    <span className="font-medium">{product.name}</span>
                    <span>S/. {product.price}</span>
                  </div>

                  <div className="flex justify-center items-center ">
                    <div className="flex justify-center items-center border-2 border-foreground h-9 w-9 rounded-full hover:bg-foreground hover:text-card cursor-pointer transition-all antialised">
                      <ShoppingBag className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </section>
    </Container>
  );
};

export default Home;
