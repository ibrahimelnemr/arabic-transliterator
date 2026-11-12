import BaseLayout from "../layouts/baseLayout";
import AboutSection from "../components/aboutSection";
import TransliterateSection from "../components/transliterateSection";

export default function Home() {
  return <BaseLayout><TransliterateSection /><AboutSection /></BaseLayout>;
}
