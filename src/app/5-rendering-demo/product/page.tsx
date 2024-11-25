import { Suspense } from "react";
import ProductData from "./component/product";
import ReviewData from "./component/review";

export default function Page() {
  return (
    <>
      <h1> Product Page</h1>
      <Suspense fallback={"Loading Component Product....."}>
        <ProductData />
      </Suspense>
      <Suspense fallback={"Loading Component Review....."}>
        <ReviewData />
      </Suspense>
    </>
  );
}
