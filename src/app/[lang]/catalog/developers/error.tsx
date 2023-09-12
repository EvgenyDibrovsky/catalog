"use client";
import Section from "../../components/Base/Section";

export default function ErrorWrapper({ error }: { error: Error }) {
  return (
    <Section>
      <div className="container">
        <h1 className="text-center text-sky-600">Oops!!! {error.message}</h1>
      </div>
    </Section>
  );
}
