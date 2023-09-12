import type { Metadata } from "next";
import Link from "next/link";

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

  if (!response.ok) throw new Error("No companies found");

  return response.json();
}

export default async function Developers() {
  const posts = await getData();
  return (
    <>
      <h1>Застройщики</h1>
      <ul className="grid grid-cols-3 gap-4">
        {posts.map((post: any) => (
          <li key={post.id} className="shadow-md p-2">
            <Link href={`/catalog/developers/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
