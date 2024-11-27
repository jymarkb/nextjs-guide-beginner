import ProductCard from "@/components/product-component/card";

export default async function ProductPage() {
  // const product = await fetch("http://localhost:3001/products", { cache: "force-cache"});
  // const product = await fetch("http://localhost:3001/products", {
  //   next: { revalidate: 10 },
  //   cache: "force-cache",
  // });
  const product = await fetch("http://localhost:3001/products");
  const dataProduct: Product[] = await product.json();
  return (
    <div className="max-w-60 mx-auto">
      <h1> Product Page</h1>
      {dataProduct.map((item, id) => {
        return <ProductCard key={id} params={item} />;
      })}
    </div>
  );
}
