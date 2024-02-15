"use server";

import { Product } from "@/components/product-card";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { redirect } from "next/navigation";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export async function payProduct(product: Product) {

  const preference = await new Preference(client).create({
    body: {
      items: [
        {
          id: `${product.id}`,
          title: product.name,
          quantity: 1,
          unit_price: Number(product.price),
        },
      ],
    },
  });

  redirect(preference.sandbox_init_point!);
}
