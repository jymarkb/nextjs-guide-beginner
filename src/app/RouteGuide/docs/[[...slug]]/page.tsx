import { notFound } from "next/navigation";

export default async function Docs({ params }: { params: { slug: string[] } }) {
  const { slug } = await params;

  if (slug?.length > 5) {
    notFound();
  } else {
    return <h1> Docs homepage {slug?.length}</h1>;
  }
}
