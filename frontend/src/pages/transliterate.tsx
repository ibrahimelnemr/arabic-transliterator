import { useEffect } from "react";
import { useRouter } from "next/router";
import Home from "./index";

export default function Transliterate() {
  const router = useRouter();
  useEffect(() => {
    void router.replace("/#transliterate", undefined, { scroll: false });
  }, [router]);
  return <Home />;
}
