import React, { FormEvent, useState } from "react";
import Section from "../section";
import { transliterate } from "../../lib/transliterate";

export default function TransliterateSection() {
  const [arabicText, setArabicText] = useState("أهلاً وسهلاً يا غالي");
  const [transliteratedText, setTransliteratedText] = useState("");
  const [includeDiacritics, setIncludeDiacritics] = useState(true);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTransliteratedText(transliterate(arabicText, { includeDiacritics }));
  }

  return (
    <Section sectionName="Transliterate">
      <form onSubmit={submit} className="w-full max-w-xl mx-auto">
        <label htmlFor="arabic-text" className="block text-lg mb-3">Arabic text</label>
        <textarea
          id="arabic-text"
          lang="ar"
          dir="auto"
          rows={5}
          className="bg-gray-100 w-full text-gray-800 px-4 py-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={arabicText}
          onChange={event => setArabicText(event.target.value)}
        />
        <label className="flex items-center gap-3 mb-5">
          <input type="checkbox" checked={includeDiacritics} onChange={event => setIncludeDiacritics(event.target.checked)} />
          Include diacritics
        </label>
        <button type="submit" className="w-full px-4 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Transliterate</button>
        <p className="text-sm mt-3 mb-6">Your text is processed on your device.</p>
        <label htmlFor="transliteration-result" className="block text-lg mb-3">Transliteration</label>
        <output id="transliteration-result" dir="ltr" aria-live="polite" className="block whitespace-pre-wrap break-words bg-gray-700 p-4 rounded-md min-h-20 text-xl">{transliteratedText}</output>
      </form>
    </Section>
  );
}
