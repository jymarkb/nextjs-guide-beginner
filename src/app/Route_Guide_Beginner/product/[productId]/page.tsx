type Props = {
  params: Promise<{ productId: string }>;
};

export default async function Product({ params }: Props) {
  const { productId } = await params;
  return <h1>Product page with id {productId}</h1>;
}
