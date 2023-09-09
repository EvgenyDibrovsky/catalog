import type { Metadata } from "next";
import Section from "../../components/Base/Section";

export const metadata: Metadata = {
  title: "Catalog",
  description: "Next app",
};

type Props = {
  params: {
    id: string;
  };
};

export default function Company({ params: { id } }: Props) {
  return (
    <Section>
      <div className="container">
        <h1>Company name {id}</h1>
      </div>
    </Section>
  );
}
