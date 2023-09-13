"use client";
import Section from "./components/Base/Section";
import { useTranslation } from "react-i18next";
export default function Home() {
  const { t } = useTranslation();
  return (
    <Section>
      <div className="container">
        <h1>{t("nav_neader.nav_item_1")}</h1>
      </div>
    </Section>
  );
}
