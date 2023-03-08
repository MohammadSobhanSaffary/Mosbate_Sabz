"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { Fragment } from "react";
import i18next, { t } from "i18next";
import { English } from "../../translation/en";
import { Persian } from "../../translation/fa";
import { useRouter } from "next/navigation";

i18next.init({
  lng: "fa",
  debug: true,
  resources: {
    en: {
      translation: English,
    },
    fa: { translation: Persian },
  },
});

export default function Home() {
  const router: any = useRouter();
  return (
    <div className="w-full h-[100vh] flex items-center justify-center ">
      <div className="grid md:grid-cols-5 sx:grid-cols-12 gap-8 w-full px-8 ">
        <i />
        <button
          className="shadow-xl radius runded rounded-md flex items-center justify-center h-60 bg-[#f3f3f3]  button"
          onClick={() => {
            router.push("/weather");
          }}
        >
          <span className="text-xl font-bold">{t("Weather")}</span>
        </button>
        <button
          className="shadow-xl radius runded rounded-md flex items-center justify-center h-60  bg-[#f3f3f3] button"
          onClick={() => {
            router.push("/home");
          }}
        >
          <span className="text-xl font-bold">{t("Cart")} </span>
        </button>
        <button
          className="shadow-xl radius runded rounded-md flex items-center justify-center h-60  bg-[#f3f3f3] button"
          onClick={() => {
            router.push("/cart");
          }}
        >
          <span className="text-xl font-bold"> {t("Products")} </span>
        </button>
        <i />
      </div>
    </div>
  );
}
