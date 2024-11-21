import Link from "next/link";

import coffeeData from "./coffeeData";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function GalleryPage() {
  return (
    <div className="container max-w-2xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Gallery Page</h1>
      <div className="flex flex-wrap">
        {coffeeData.map((item, index) => (
          <div key={index} className="w-1/2 p-2 flex items-center ">
            <Card className="w-full p-4">
              <Link key={index} href={`/gallery/${item.id}`}>
                <Image
                  className="rounded"
                  src={item.src}
                  alt={item.altText}
                  width={item.width}
                  height={item.height}
                  priority
                />
              </Link>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
