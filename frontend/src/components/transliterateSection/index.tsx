import React, { useEffect, useMemo, useRef, useState } from "react";
import { transliterate } from "../../lib/transliterate";

export default function TransliterateSection() {
  const [arabicText, setArabicText] = useState("أهلاً وسهلاً يا غالي");
  const [includeDiacritics, setIncludeDiacritics] = useState(true);
  const input = useRef<HTMLTextAreaElement>(null);
  const result = useMemo(
    () => transliterate(arabicText, { includeDiacritics }),
    [arabicText, includeDiacritics],
  );

  useEffect(() => {
    if (!input.current) return;
    input.current.style.height = "auto";
    input.current.style.height = `${Math.min(input.current.scrollHeight, 260)}px`;
  }, [arabicText]);

  return (
    <section id="transliterate" className="transliterate-section" aria-labelledby="transliterate-title">
      <div className="tool-heading">
        <span className="heading-rule" aria-hidden="true" />
        <h1 id="transliterate-title">Transliterate<span className="title-dot">.</span></h1>
      </div>
      <div className="transliterator">
        <label htmlFor="arabic-text" className="field-label">Arabic text</label>
        <div className="input-shell">
          <textarea
            ref={input}
            id="arabic-text"
            lang="ar"
            dir="auto"
            rows={1}
            spellCheck={false}
            value={arabicText}
            onChange={event => setArabicText(event.target.value)}
          />
          <span className="input-symbol" aria-hidden="true">↗</span>
        </div>
        <div className="input-options">
          <label className="diacritics-toggle">
            <input type="checkbox" role="switch" checked={includeDiacritics} onChange={event => setIncludeDiacritics(event.target.checked)} />
            <span className="switch-track" aria-hidden="true"><span /></span>
            <span>Include diacritics</span>
          </label>
          <p>Your text is processed on your device.</p>
        </div>
        <div className="result-area">
          <label htmlFor="transliteration-result" className="field-label">Transliteration</label>
          <output id="transliteration-result" dir="ltr" aria-live="polite" aria-atomic="true">
            <span key={result} className="result-text">{result || "\u00a0"}</span>
          </output>
        </div>
      </div>
      <a className="scroll-link" href="#about">About <span aria-hidden="true">↓</span></a>
    </section>
  );
}
