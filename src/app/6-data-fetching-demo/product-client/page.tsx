"use client";
import ProductCard from "@/components/product-component/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ProductClientPage() {
  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);

  const handleButtonClick = async () => {
    setLoading(true);
    setShowData(false);

    try {
      const response = await fetch("http://localhost:3001/products");
      const productData = await response.json();
      console.log("timeout for 2s");
      setTimeout(() => {
        setProduct(productData);
        setShowData(true);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button onClick={handleButtonClick}>Show All Product</Button>
      {loading && <h1>Loading Data.....</h1>}
      {!loading &&
        showData &&
        product.map((item, id) => {
          return <ProductCard key={id} params={item} />;
        })}
    </>
  );
}
