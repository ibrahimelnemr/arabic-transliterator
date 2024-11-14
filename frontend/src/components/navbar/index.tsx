import React from "react";
import Link from "next/link";
import NavbarLink from "./navbarLink";

export default function Navbar() {
  const navbarItems: { name: string; url: string }[] = [
    { name: "About", url: "/" },
    { name: "Transliterate", url: "/transliterate" },
  ];

  return (
    <nav className="">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-extralight">
          <NavbarLink href="/" pageName="Arabize" />
        </div>

        <button
          className="lg:hidden text-gray-600 focus:outline-none"
          type="button"
          aria-label="Toggle navigation"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="material-icons">menu</span>
        </button>

        <div className="hidden lg:flex space-x-8">
          {navbarItems.map((item, index) => (
            <div key={index}>
              <NavbarLink href={item.url} pageName={item.name} />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
