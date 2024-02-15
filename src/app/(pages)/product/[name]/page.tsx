/* eslint-disable @next/next/no-img-element */
import Container from "@/components/container";
import ProductCard, { Product } from "@/components/product-card";
import ActionButtons from "@/components/product/action-buttons";
import { Button } from "@/components/ui/button";
import { raleway } from "@/lib/fonts";
import { formatCurrency } from "@/lib/utils";
import MercadoPagoConfig from "mercadopago";

interface Props {
  params: { name: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

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

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

const Product = ({ params }: Props) => {
  const product: Product[] = products.filter(
    ({ slug }) => params.name === slug
  );


  return (
    <Container className="min-h-screen">
      <section className="grid grid-col-1 md:grid-cols-10 gap-4 w-full my-8 sm:my-10">
        <div className="flex flex-col-reverse md:grid md:grid-cols-5 md:col-span-6 gap-4 px-4 sm:px-2">
          <div className="col-span-1 flex md:flex-col gap-4 max-h-[700px]">
            {Array(4)
              .fill(product[0].imgUrl)
              .map((item, index) => (
                <div
                  key={index}
                  className="bg-secondary h-full aspect-[8/9] rounded-lg"
                >
                  <img
                    src={`${item}`}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
          </div>

          <div className="col-span-4 max-h-[700px] aspect-[8/9] bg-secondary rounded-lg">
            <img
              src={`${product[0].imgUrl}`}
              alt="product-img"
              className="object-center h-full w-full object-cover p-2"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 md:col-span-4 px-4 sm:px-2">
          <div className="flex flex-col gap-1">
            <span className="text-sm text-muted-foreground">Smartphone</span>
            <span className={`text-4xl font-semibold`}>{product[0].name}</span>
            <span className="text-2xl font-medium">
              {formatCurrency(product[0].price)}
            </span>
          </div>

          <div>
            <span className="text-sm text-muted-foreground">
              Stock: 2 unidades{" "}
            </span>
          </div>

          <div>
            <span className="font-semibold text-xs">Descripcion</span>
            <p className="text-xs font-muted-foreground text-balance mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              numquam sed saepe, facere voluptatem atque tempora impedit
              aspernatur vitae mollitia placeat illo assumenda itaque harum quas
              perferendis et animi? Excepturi?
            </p>
          </div>

          <div className="w-80">
            <span className="font-semibold text-xs">Colores disponibles</span>
            <div className="flex justify-center items-center border border-foreground rounded-full h-7 w-7 p-1 mt-2">
              <div className="rounded-full bg-foreground h-full w-full "></div>
            </div>
          </div>

          <ActionButtons product={product[0]} />
        </div>
      </section>

      <section className="px-4 md:px-2 mb-16">
        <header className="mb-6">
          <h3 className={`${raleway.className} text-2xl font-bold`}>
            Estos articulos podrian interesarte
          </h3>
        </header>

        <main>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </section>
    </Container>
  );
};

export default Product;
