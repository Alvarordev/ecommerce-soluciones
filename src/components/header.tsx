import { ShoppingBag, User2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  const routes = [
    {
      title: "Catalogo",
      href: "/collection",
    },
  ];

  return (
    <header className="flex items-center w-full h-16 border-b">
      <div className="flex justify-between max-w-7xl mx-auto w-full">
        <div className="flex flex-grow basis-0">
          <Link href={"/"} className="text-xl font-bold">
            Soluciones Inteligentes
          </Link>
        </div>

        <ul className="flex items-center space-x-3">
          {routes.map((route) => (
            <li key={route.title} className="text-sm">
              <Link href={route.href}>{route.title}</Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-grow justify-end basis-0 space-x-3">
          <Link href={"/cart"} className="flex gap-2 text-sm items-center">
            <ShoppingBag />
            <span>Carrito (0)</span>
          </Link>
          <Link href={"/auth/login"} className="flex gap-2 text-sm items-center">
            <User2 />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
