import { Navbar } from "@/components/landing-page/navbar";
import { fetchDataImages } from "@/utils/server-utils";

export default function LandingPage() {
  const imagesData = fetchDataImages();
  return (
    <>
      <p>{imagesData}</p>
      <Navbar />
      <main>
        <h1>Page heading</h1>
      </main>
    </>
  );
}
