import AboutSubmitForm from "./component/form";
import { cookies } from "next/headers";

export default async function AboutPage() {
  const cookieData = await cookies();
  const theme = cookieData.get("theme");
  console.log(theme);
  return (
    <>
      <h1>About Page {new Date().toLocaleTimeString()}</h1>
      <AboutSubmitForm />
    </>
  );
}
