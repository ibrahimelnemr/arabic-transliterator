import React, { ReactNode } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

type BaseLayoutProps = {
  children: ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col p-0 bg-gray-100">
        {children}
      </main>
      <Footer />
    </div>
  );
}
