import Link from "next/link";
import getDefaultTopNavigation from "@/app/Layout_Guide_Beginner/_navigation/navigation";

type Props = {
  params: Promise <{productId: string}>
};

export async function generateMetadata({ params }: Props) {
  const { productId } = await params;
  return {
    title: `Product # ${productId}`,
    description: `This description is about Product #${productId}`,
  };
}

export default async function Product({ params }: Props) {
  const { productId } = await params;
  const links = getDefaultTopNavigation();
  return (
    <>
      <div>
        {links.map((link, id) => (
          <Link key={id} href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
      <h1>Product Page body of Product # {productId}</h1>
    </>
  );
}
