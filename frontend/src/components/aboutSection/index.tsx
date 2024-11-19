import React from "react";
import Section from "../section";

export default function AboutSection() {
  return (
    <Section sectionName="About">
      <div className="prose max-w-none text-lg leading-relaxed">
        <p className="mb-6">
          This project was made to showcase the{" "}
          <strong className="font-bold">Direct Correspondence</strong> method of
          Arabic transliteration.
        </p>

        <p className="mb-6">
          The <strong className="font-bold">Direct Correspondence</strong>{" "}
          transliteration system is intended to essentially allow for
          transliterating Arabic text into Roman letters, using both Latin
          letters and Unicode accents or modifiers, with a one-to-one
          correspondence between each Arabic letter or diacritic and its
          romanized counterpart.
        </p>

        <p className="mb-6">
          In order to factor for ease of reading, the DC system also allows for
          several modes, including the exclusion of diacritics, the use of
          letters as aliases for diacritics, and the direct use of diacritics.
          This effectively strikes a balance between being easy to read, being
          easy to comprehend, and being internally consistent with a direct
          correspondence to the Arabic text.
        </p>

        {/* <div className="flex flex-col justify-content-center items-center mt-10">
          <div className="text-3xl">Sample Texts</div>
        </div> */}

        <div className="mt-8">
          <h2 className="text-xl mb-4">Without Diacritics</h2>
          <div className="bg-gray-700 p-4 rounded-md font-scherazade text-2xl">
            {"الوقت كالسيف، إن لم تقطعه قطعك"}
          </div>
          <div className="bg-gray-700 p-4 rounded-md mt-4 font-mono text-lg">
            {"alwqt kalsy̤f a̜n lm tqṭạh qṭạk"}
          </div>

          <h2 className="text-xl mb-4 mt-8">With Diacritics - Accent Vowels</h2>
          <div className="bg-gray-700 p-4 rounded-md font-scherazade text-2xl">
            {"الوَقْتُ كَالسَّيْفِ، إِنْ لَمْ تَقْطَعْهُ قَطَعَكَ"}
          </div>
          <div className="bg-gray-700 p-4 rounded-md mt-4 font-mono text-lg">
            {"alẃq̊t̆ ḱalś̄ẙ̤f̀ à̜n̊ ĺm̊ t́q̊ṭ́ạ̊h̆ q́ṭ́ạ́ḱ"}
          </div>

          <h2 className="text-xl mb-4 mt-8">
            With Diacritics - Separate Character Vowels
          </h2>
          <div className="bg-gray-700 p-4 rounded-md font-scherazade text-2xl">
            {"الوَقْتُ كَالسَّيْفِ، إِنْ لَمْ تَقْطَعْهُ قَطَعَكَ"}
          </div>
          <div className="bg-gray-700 p-4 rounded-md mt-4 font-mono text-lg">
            {"alwa̱q̊tu̱ ka̱alsa̱ẙ̤fi̱ a̜n̊ la̱m ta̱q̊ṭa̱ạ̊hu̱ qa̱ṭa̱ạa̱ka̱"}
          </div>
        </div>
      </div>
    </Section>
  );
}
