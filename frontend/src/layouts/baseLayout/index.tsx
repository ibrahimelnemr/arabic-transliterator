import { ReactNode } from "react";
import { Container } from "react-bootstrap";

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Container fluid className="vh-100">
        {children}
      </Container>
    </>
  );
}
