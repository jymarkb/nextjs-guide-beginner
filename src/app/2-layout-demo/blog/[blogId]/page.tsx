import { Metadata } from "next";

type Props = {
  params: Promise<{ blogId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).blogId;
  return {
    title: `Blog Post ${id}`,
    description: "Description of the blog post.",
  };
}

export default async function BlogPage({ params }: Props) {
  const id = (await params).blogId;
  return <h1>Blog Post # {id}</h1>;
}
