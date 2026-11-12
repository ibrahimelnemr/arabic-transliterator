import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("transliterate");
  useEffect(() => {
    const onScroll = () => {
      const about = document.getElementById("about");
      setActive(about && about.getBoundingClientRect().top < window.innerHeight * 0.4 ? "about" : "transliterate");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="wordmark" href="#transliterate">Arabize<span aria-hidden="true">.</span></a>
        <nav aria-label="Main navigation">
          {[{ id: "transliterate", label: "Transliterate" }, { id: "about", label: "About" }].map(item => (
            <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined}>{item.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
