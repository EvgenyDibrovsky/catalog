import type { Metadata } from "next";
import Section from "../../components/Base/Section";

export const metadata: Metadata = {
  title: "Catalog",
  description: "Next app",
};

export default function AddCompany() {
  return (
    <Section>
      <div className="container">
        <h1>Добавить новую компанию</h1>
      </div>
    </Section>
  );
}
