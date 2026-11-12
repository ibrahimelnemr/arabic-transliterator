import React, { ReactNode, useEffect } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function BaseLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || !("IntersectionObserver" in window)) return;
    const nodes = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.remove("reveal-pending");
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08 });
    nodes.forEach(node => {
      if (node.getBoundingClientRect().top > window.innerHeight) node.classList.add("reveal-pending");
      observer.observe(node);
    });
    const showAll = () => { if (media.matches) nodes.forEach(node => node.classList.remove("reveal-pending")); };
    media.addEventListener("change", showAll);
    return () => { observer.disconnect(); media.removeEventListener("change", showAll); };
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#transliterate">Transliterate</a>
      <div className="ambient-background" aria-hidden="true"><span /><span /><div className="ambient-orbit" /></div>
      <Navbar />
      <main className="page-content">{children}</main>
      <Footer />
    </div>
  );
}
