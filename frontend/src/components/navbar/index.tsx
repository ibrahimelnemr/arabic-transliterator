import React from "react";
import Link from "next/link";
import NavbarLink from "./navbarLink";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="text-lg font-extralight text-gray-700">
          Arabize
        </a>

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
          <NavbarLink href="/about" pageName="About" />

          <NavbarLink href="/transliterate" pageName="Transliterate" />

        </div>
      </div>
    </nav>
  );
}
