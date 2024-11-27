import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

type Props = {
  params: User;
};

function capitalizeWords(str: string): string {
  return str
    .toLowerCase()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function UserCard({ params }: Props) {
  console.log(params);

  return (
    <>
      <Card className="m-4">
        <CardHeader className="pb-2">
          <CardTitle>{params.name}</CardTitle>
          <CardDescription className="text-sm">
            {params.address.street}, {params.address.city},{" "}
            {params.address.zipcode}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="font-bold">{capitalizeWords(params.company.name)}</p>
          <p className="text-sm">{capitalizeWords(params.company.bs)}</p>
          <p className="text-sm italic">
            {capitalizeWords(params.company.catchPhrase)}
          </p>
        </CardContent>
      </Card>
    </>
  );
}
