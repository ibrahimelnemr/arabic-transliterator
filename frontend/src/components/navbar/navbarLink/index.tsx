import React from "react";
import Link from "next/link";

export default function NavbarLink({
  href,
  pageName,
}: {
  href: string;
  pageName: string;
}) {
  return (
    <Link href={href} className="text-gray-600 hover:text-gray-900 font-extralight">
      {pageName}
    </Link>
  );
}
