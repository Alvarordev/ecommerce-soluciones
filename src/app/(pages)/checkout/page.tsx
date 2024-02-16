import CartProductCard from "@/components/cart-product-cart";
import Container from "@/components/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { raleway } from "@/lib/fonts";
import { formatCurrency } from "@/lib/utils";
import React from "react";

const products = [
  {
    id: 1,
    name: "Iphone 15 Pro",
    slug: "iphone-15-pro",
    price: 4990.0,
    imgUrl: "../iphone-15-pro.webp",
  },
  {
    id: 2,
    name: "Mac mini M2",
    slug: "mac-mini-m2",
    price: 3000.0,
    imgUrl: "../mac-mini-transparente.png",
  },
  {
    id: 3,
    name: "Galaxy Tab S8+",
    slug: "galaxy-tab-s8",
    price: 3100.0,
    imgUrl: "../galaxy-tab-s8.png",
  },
  {
    id: 4,
    name: "Apple watch S8",
    slug: "apple-watch-s8",
    price: 1900.0,
    imgUrl: "../apple-watch-s8.png",
  },
];

const Checkout = () => {
  return (
    <Container className="min-h-screen">
      <article className="flex flex-col md:grid md:grid-cols-10 w-full my-4">
        <section className="md:col-span-6 px-4 lg:pr-10 xl:pr-16">
          <header className="mb-5">
            <h3 className={`${raleway.className} text-2xl font-semibold`}>
              Order Details
            </h3>
          </header>

          <div className="w-full">
            <form className="flex flex-col gap-6">
              <div className="flex w-full gap-4 md:gap-10">
                <div className="flex flex-col gap-2 w-full">
                  <Label>Nombre</Label>
                  <Input  className="h-9" />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <Label>Apellidos</Label>
                  <Input />
                </div>
              </div>

              <div className="flex w-full gap-4 md:gap-10">
                <div className="flex flex-col gap-2 w-full">
                  <Label>Email</Label>
                  <Input />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <Label>Telefono</Label>
                  <Input />
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <Label>Direccion</Label>
                <Input />
              </div>

              <div className="flex w-full gap-4 md:gap-10">
                <div className="flex flex-col gap-2 w-full">
                  <Label>Informacion adicional</Label>
                  <Input />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <Label>Distrito</Label>
                  <Input />
                </div>
              </div>

              <div>
                Datos de facturacion
              </div>
            </form>
          </div>
        </section>

        <section className="flex flex-col gap-8 md:col-span-4 px-4">
          <div>
            <header className="mb-5">
              <h3 className={`${raleway.className} text-2xl font-semibold`}>
                Tus Productos
              </h3>
            </header>

            <div>
              <CartProductCard product={products[0]} />
            </div>
          </div>

          <div>
            <header className="mb-5">
              <h3 className={`${raleway.className} text-2xl font-semibold`}>
                Resumen del pedido
              </h3>
            </header>

            <div className="flex flex-col w-full bg-muted rounded-lg p-6 gap-2 text-sm font-medium shadow-md">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatCurrency(products[0].price)}</span>
              </div>

              <div className="flex justify-between">
                <span>Envio</span>
                <span>Gratis</span>
              </div>

              <div className="flex justify-between pt-4 text-base font-semibold">
                <span>Total</span>
                <span>{formatCurrency(products[0].price)}</span>
              </div>
            </div>
          </div>
        </section>
      </article>
    </Container>
  );
};

export default Checkout;
