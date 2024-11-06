import axios from "axios";
import React from "react";
import MainPage from "../components/mainPage";
import BaseLayout from "../layouts/baseLayout";

export default function Home() {
  return (
    <BaseLayout>
      <MainPage />
    </BaseLayout>
  );
}
