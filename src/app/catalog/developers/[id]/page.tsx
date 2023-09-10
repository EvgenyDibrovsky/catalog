import type { Metadata } from "next";
import Section from "../../../components/Base/Section";

async function getData(id: string) {


  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: id,
  };
}

export default async function Company({ params: { id } }: Props) {
  const post = await getData(id);

  return (
      <Section>
        <div className="container">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </Section>
  );
}
