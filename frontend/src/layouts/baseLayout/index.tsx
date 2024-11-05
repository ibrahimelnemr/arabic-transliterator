import { ReactNode } from "react";
import { Container } from "react-bootstrap";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main
        className={`container-fluid flex-grow-1 d-flex flex-column p-0 bg-light`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
