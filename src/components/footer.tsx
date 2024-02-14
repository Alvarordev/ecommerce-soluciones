import { Building } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  const categories = [
    {
      title: "Computador",
      href: "/collection/computador",
    },
    {
      title: "Smartphone",
      href: "/collection/smartphone",
    },
    {
      title: "Tablets",
      href: "/collection/tablets",
    },
    {
      title: "Laptops",
      href: "/collection/laptops",
    },
    {
      title: "Wearables",
      href: "/collection/wearables",
    },
    {
      title: "Camaras",
      href: "/collection/camaras",
    },
  ];

  const clients = [
    {
      title: "Metodos de pago",
      href: "/content/metodos-de-pago",
    },
    {
      title: "Garantia",
      href: "/content/garantia",
    },
    {
      title: "Delivery",
      href: "/content/delivery",
    },
  ];

  const company = [
    {
      title: "Sobre nosotros",
      href: "/content/sobre-nosotros",
    },
    {
      title: "Privacidad",
      href: "/content/privacidad",
    },
    {
      title: "Terminos y condiciones",
      href: "/content/terminos-y-condiciones",
    },
  ];

  return (
    <footer className="w-full bg-foreground text-card">
      <div className="flex flex-col gap-10 lg:flex-row w-full justify-between space-x-2 px-10 pt-16 pb-10">
        <div className="flex flex-col md:flex-grow md:basis-0 items-center md:items-baseline text-center md:text-start">
          <div className="flex gap-2 pb-2">
            <Building />
            <h2 className="text-xl font-bold">Soluciones Inteligentes</h2>
          </div>

          <p className="text-sm text-muted-foreground">
            Construyendo soluciones y brindando innovación
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-between px-2 md:gap-0 md:justify-normal md:flex-nowrap md:space-x-20">
          <div className="flex flex-col min-w-[100px]">
            <span className="text-sm pb-3">Categorias</span>
            <ul>
              {categories.map((category) => (
                <li key={category.title}>
                  <Link
                    className="text-xs py-1 text-muted-foreground hover:text-card transition-all"
                    href={category.href}
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col min-w-[100px]">
            <span className="text-sm pb-3">Clientes</span>
            <ul>
              {clients.map((client) => (
                <li key={client.title}>
                  <Link
                    className="text-xs py-1 text-muted-foreground hover:text-card transition-all"
                    href={client.href}
                  >
                    {client.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col min-w-[100px]">
            <span className="text-sm pb-3">Compañia</span>
            <ul>
              {company.map((policy) => (
                <li key={policy.title}>
                  <Link
                    className="text-xs py-1 text-muted-foreground hover:text-card transition-all"
                    href={policy.href}
                  >
                    {policy.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flexl flex-grow basis-0 justify-end">
          <div className="flex justify-end">
            <span className="text-sm">store@solucionesinteligentes.com</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-xs w-full py-4 px-4 text-center">
        © {year} Soluciones Inteligentes - Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
