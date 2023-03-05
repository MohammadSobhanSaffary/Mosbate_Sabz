import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { Fragment } from "react";
import i18next, { t } from "i18next";
import { English } from "../../translation/en";
import { Persian } from "../../translation/fa";
const inter = Inter({ subsets: ["latin"] });

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
  return (
    <Fragment>
      <p className="text-red-600 font-medium text-3xl ">{t("Tea")}</p>
    </Fragment>
  );
}
