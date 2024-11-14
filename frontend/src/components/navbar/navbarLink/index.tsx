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
    <Link href={href} className="font-extralight">
      {pageName}
    </Link>
  );
}
