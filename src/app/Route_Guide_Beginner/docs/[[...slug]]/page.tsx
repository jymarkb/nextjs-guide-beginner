import { notFound } from "next/navigation";

type Props = {
  params : Promise <{slug: string[]}>
}

export default async function Docs({params}: Props) {
  const { slug } = await params;

  if (slug?.length > 5) {
    notFound();
  } else {
    return <h1> Docs homepage {slug?.length}</h1>;
  }
}
