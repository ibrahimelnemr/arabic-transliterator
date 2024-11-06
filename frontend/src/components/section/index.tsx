import React, { ReactNode } from "react";
import SectionTitle from "./sectionTitle";

export default function Section({
  children,
  sectionName,
}: {
  children: ReactNode;
  sectionName: string;
}) {
  return (
    <section className="p-10 bg-gray-100 animate-fadeIn min-h-[40vh]">
      <SectionTitle sectionName={sectionName} />
      <div className="grid grid-cols-1 gap-8 mt-4">{children}</div>
    </section>
  );
}
