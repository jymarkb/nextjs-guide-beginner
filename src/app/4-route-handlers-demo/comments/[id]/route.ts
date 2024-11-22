import { redirect } from "next/navigation";
import { comments } from "../data";

type Props = {
  params: Promise<{ id: string }>;
};

function checkIsIdOver(id: string) {
  if (parseInt(id) > comments.length) {
    redirect("/comments");
  }
}

export async function GET(_request: Request, { params }: Props) {
  const { id } = await params;
  checkIsIdOver(id);

  const comment = comments.find((comment) => comment.id === parseInt(id));
  return Response.json(comment);
}

export async function PATCH(request: Request, { params }: Props) {
  const { id } = await params;
  checkIsIdOver(id);

  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  comments[index].text = text;
  return Response.json(comments[index]);
}
export async function DELETE(_request: Request, { params }: Props) {
  const { id } = await params;
  checkIsIdOver(id);

  const index = comments.findIndex((comment) => comment.id === parseInt(id));

  const deletedComment = comments[index];
  comments.splice(index, 1);
  return Response.json(deletedComment);
}
