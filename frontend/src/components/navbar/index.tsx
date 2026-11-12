import React from "react";
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

        <div className="flex gap-5 sm:gap-8">
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
