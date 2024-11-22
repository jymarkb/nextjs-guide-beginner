import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
  const queryParams = request.nextUrl.searchParams.get("text");
  const filterComment = queryParams
    ? comments.filter((comment) => comment.text.includes(queryParams))
    : comments;

  return Response.json(filterComment);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = { id: comments.length + 1, text: comment.text };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
