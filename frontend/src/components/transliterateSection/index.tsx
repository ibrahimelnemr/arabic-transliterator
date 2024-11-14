import axios from "axios";
import React, { useState, useEffect } from "react";
import Section from "../section";

export default function TransliterateSection() {
  const [arabicText, setArabicText] = useState<string>("أهلاً وسهلاً يا غالي");
  const [transliteratedText, setTransliteratedText] = useState<string>("");

  const getTransliteratedSentence = async (arabicText: string) => {
    try {
      const response = await axios({
        method: "post",
        url: "https://arabize-backend-latest.onrender.com/",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          arabicText: arabicText,
        },
      });

      console.log(`getTransliteration - response`);
      console.log(response);

      if (response && response.data) {
        setTransliteratedText(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Section sectionName="">
      <div>
        <div className="text-center text-xl mb-6">
          {"Sample text: أهلاً وسهلاً يا غالي"}
        </div>

        <div className="text-center text-lg mb-6">{transliteratedText}</div>

        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <input
              className="bg-gray-100 w-full text-gray-600 px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={arabicText}
              onChange={(e) => {
                setArabicText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                console.log(`button clicked`);
                getTransliteratedSentence(arabicText);
              }}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
