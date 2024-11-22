import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeader = new Headers(request.headers);
  const headerList = headers();
  // const authHeaders = requestHeader.get("Authorization") as string;
  // const { password } = JSON.parse(authHeaders);

  (await cookies()).set("resultPerPage", "20");
  const theme = request.cookies.get("theme");
  const allCookies = (await cookies()).getAll();

  console.log(
    {
      "request headers": requestHeader.get("Authorization"),
      headers: (await headerList).get("Authorization"),
    },
    { cookie: theme, "all cookies": allCookies }
  );
  // return new Response("Profile Data API");
  return new Response("<h1>Profile Data API</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
