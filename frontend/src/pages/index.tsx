import axios from "axios";
import React from "react";
import BaseLayout from "../layouts/baseLayout";
import TransliterateSection from "../components/transliterateSection";
import AboutSection from "../components/aboutSection";

export default function Home() {
  return (
    <BaseLayout>
      <AboutSection/>
    </BaseLayout>
  );
}
