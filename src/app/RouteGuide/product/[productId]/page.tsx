export default async function Product({ params }: { params: { productId: string } }) {
    const { productId } = await params;
    return <h1>Product page with id {productId}</h1>;
}