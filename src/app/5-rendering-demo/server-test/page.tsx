import ImageSlider from "@/components/ImageSlider";
import { serverSideFunction } from "@/utils/server-utils";

export default function ServerPage() {
  console.log("server component");
  const result = serverSideFunction();
  return (
    <>
      <h1> Server Route Page</h1>
      <p>{result}</p>
      
      <ImageSlider />
    </>
  );
}
