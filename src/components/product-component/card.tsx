import { Card, CardContent } from "../ui/card";

type Props = {
  params: Product;
};

function capitalizeWords(str: string): string {
  return str
    .toLowerCase()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function ProductCard(params: Props) {
  return (
    <>
      <Card className="m-2">
        <CardContent className="p-3">
          <p className="font-bold">{capitalizeWords(params.params.title)}</p>
          <p className="text-sm">{params.params.price} PHP</p>
          <p className="text-sm italic">
            {capitalizeWords(params.params.description)}
          </p>
        </CardContent>
      </Card>
    </>
  );
}
