import coffeeData, { CoffeeData } from "@/app/3-advance-route-demo/gallery/coffeeData";
import Image from "next/image";
import Modal from "@/components/modal-gallery";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function GalleryPhoto({ params }: Props) {
  const { id } = await params;
  const photo: CoffeeData = coffeeData.find((p) => p.id === id)!;

  return (
    <Modal>
      <div className="m-5">
        <Image
          src={photo.src}
          alt={photo.altText}
          width={photo.width}
          height={photo.height}
          className="rounded-lg w-full"
        />
        <p className="text-center m-2">{photo.description}</p>
      </div>
    </Modal>
  );
}
