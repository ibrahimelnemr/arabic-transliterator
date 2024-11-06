import React from "react";

export default function SectionTitle({ sectionName }: { sectionName: string }) {
  return (
    <div className="text-center p-2 mb-4">
      <h2 className="text-4xl font-thin text-gray-800">{sectionName}</h2>
    </div>
  );
}
