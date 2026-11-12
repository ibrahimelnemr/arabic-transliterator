import React, { useRef, useState } from "react";
import dictionary from "../../data/transliteration.json";

const examples = [
  {
    title: "Without Diacritics",
    arabic: "الوقت كالسيف، إن لم تقطعه قطعك",
    latin: "alwqt kalsy̤f a̜n lm tqṭạh qṭạk",
  },
  {
    title: "With Diacritics - Accent Vowels",
    arabic: "الوَقْتُ كَالسَّيْفِ، إِنْ لَمْ تَقْطَعْهُ قَطَعَكَ",
    latin: "alẃq̊t̆ ḱalś̄ẙ̤f̀ à̜n̊ ĺm̊ t́q̊ṭ́ạ̊h̆ q́ṭ́ạ́ḱ",
  },
  {
    title: "With Diacritics - Separate Character Vowels",
    arabic: "الوَقْتُ كَالسَّيْفِ، إِنْ لَمْ تَقْطَعْهُ قَطَعَكَ",
    latin: "alwa̱q̊tu̱ ka̱alsa̱ẙ̤fi̱ a̜n̊ la̱m ta̱q̊ṭa̱ạ̊hu̱ qa̱ṭa̱ạa̱ka̱",
  },
];

export default function AboutSection() {
  const [group, setGroup] = useState<"consonants" | "vowels">("consonants");
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const groups = ["consonants", "vowels"] as const;
  const mappings = Object.entries(dictionary[group]);

  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="section-heading reveal">
        <span className="section-number" aria-hidden="true">01</span>
        <h2 id="about-title">About</h2>
        <span className="section-line" aria-hidden="true" />
      </div>
      <div className="about-copy reveal">
        <p className="about-lead">
          This project was made to showcase the <strong>Direct Correspondence</strong> method of Arabic transliteration.
        </p>
        <div className="about-details">
          <p>
            The <strong>Direct Correspondence</strong> transliteration system is intended to essentially allow for transliterating Arabic text into Roman letters, using both Latin letters and Unicode accents or modifiers, with a one-to-one correspondence between each Arabic letter or diacritic and its romanized counterpart.
          </p>
          <p>
            In order to factor for ease of reading, the DC system also allows for several modes, including the exclusion of diacritics, the use of letters as aliases for diacritics, and the direct use of diacritics. This effectively strikes a balance between being easy to read, being easy to comprehend, and being internally consistent with a direct correspondence to the Arabic text.
          </p>
        </div>
      </div>
      <div className="reference-guide reveal">
        <div className="reference-header">
          <h3>Direct Correspondence</h3>
          <div className="reference-tabs" role="tablist" aria-label="Character reference">
            {groups.map((value, index) => (
              <button
                key={value}
                ref={node => { tabs.current[index] = node; }}
                type="button"
                id={`tab-${value}`}
                role="tab"
                aria-selected={group === value}
                aria-controls="reference-panel"
                tabIndex={group === value ? 0 : -1}
                onClick={() => setGroup(value)}
                onKeyDown={event => {
                  let next: number;
                  if (event.key === "ArrowRight" || event.key === "ArrowLeft") next = 1 - index;
                  else if (event.key === "Home") next = 0;
                  else if (event.key === "End") next = 1;
                  else return;
                  event.preventDefault();
                  setGroup(groups[next]);
                  tabs.current[next]?.focus();
                }}
              >{value === "consonants" ? "Consonants" : "Diacritics"}</button>
            ))}
          </div>
        </div>
        <div id="reference-panel" role="tabpanel" aria-labelledby={`tab-${group}`} tabIndex={0}>
          <dl key={group} className="character-grid">
            {mappings.map(([arabic, latin]) => (
              <div className="character-pair" key={arabic}>
                <dt lang="ar" dir="rtl">{group === "vowels" ? `◌${arabic}` : arabic}</dt>
                <dd dir="ltr">{group === "vowels" ? `◌${latin.trim()}` : latin}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="examples">
        {examples.map((example, index) => (
          <article className="example reveal" key={example.title}>
            <div className="example-heading"><span aria-hidden="true">0{index + 1}</span><h3>{example.title}</h3></div>
            <p className="example-arabic" lang="ar" dir="rtl">{example.arabic}</p>
            <p className="example-latin" dir="ltr">{example.latin}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
