import Image from "next/image";
import coffeeData, { CoffeeData } from "../coffeeData";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function GalleryPhoto({ params }: Props) {
  const { id } = await params;
  const photo: CoffeeData = coffeeData.find((p) => p.id === id)!;

  return (
    <div className="container max-w-md mx-auto m-10">
      <Image
        className="w-full"
        src={photo.src}
        alt={photo.src}
        width={photo.width}
        height={photo.height}
        priority
      />
    </div>
  );
}
