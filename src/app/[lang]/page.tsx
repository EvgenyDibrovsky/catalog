import { getDictionary } from "../../../dictionary"

import Section from "./components/Base/Section";

type HomeProps = {
  params: {
    lang: string;
  };
};

export default async function Home({ params }: HomeProps) {
    const lang = await getDictionary(params.lang);

    return (
        <Section>
            <div className="container">
                <h1 className="font-bold text-black dark:text-white">{lang.nav_neader.nav_item_1}</h1>
            </div>
        </Section>
    );
}
