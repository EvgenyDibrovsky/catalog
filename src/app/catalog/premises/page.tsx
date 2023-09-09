import type { Metadata } from 'next'
import Section from "../../components/Base/Section";

export const metadata: Metadata = {
  title: 'Contacts',
  description: 'Next app',
}

export default function Premises() {
  return (
    <Section>
    <div className="container">
      <h1>Посредники</h1>
    </div>
    </Section>
  );
}
