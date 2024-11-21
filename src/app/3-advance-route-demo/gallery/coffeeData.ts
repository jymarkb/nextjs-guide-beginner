export type CoffeeData = {
  id: string;
  src: string;
  altText: string;
  width: number;
  height: number;
  description: string;
};

const coffeeData: CoffeeData[] = [
  {
    id: "1",
    src: "/images/coffee1.webp",
    altText: "coffee image1",
    width: 300,
    height: 300,
    description:
      "A steaming cup of freshly brewed coffee, perfect for a morning boost.",
  },
  {
    id: "2",
    src: "/images/coffee2.webp",
    altText: "coffee image2",
    width: 300,
    height: 300,
    description:
      "A beautifully crafted cappuccino with latte art on top, served in a ceramic cup.",
  },
  {
    id: "3",
    src: "/images/coffee3.webp",
    altText: "coffee image3",
    width: 300,
    height: 300,
    description:
      "An espresso shot with a rich crema, highlighting its bold and intense flavor.",
  },
  {
    id: "4",
    src: "/images/coffee4.webp",
    altText: "coffee image4",
    width: 300,
    height: 300,
    description:
      "A cozy setup featuring a cup of coffee and a book for a relaxing afternoon.",
  },
];

export default coffeeData;
