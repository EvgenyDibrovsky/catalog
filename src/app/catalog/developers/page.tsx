import type { Metadata } from "next";
import Section from "../../components/Base/Section";
import Link from "next/link";
import { revalidateTag } from "next/cache";

export const metadata: Metadata = {
  title: "Застройщики",
  description: "Next app",
};
async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  return response.json();
}

export default async function Developers() {
  const posts = await getData();
  return (
    <Section>
      <div className="container">
        <h1>Застройщики</h1>
        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>
              <Link href={`/catalog/developers/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
