"use client";
import Link from "next/link";
import getDefaultTopNavigation from "../_navigation/navigation";
import { useRouter } from "next/navigation";

export default function About() {
  const links = getDefaultTopNavigation();
  const router = useRouter();
  const handleClick = async () => {
    await setTimeout(() => {
      console.log("Form Submitted Successfully");
      router.push("/");
    }, 2000);
  };
  return (
    <>
      <div>
        {links.map((link, id) => (
          <Link key={id} href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
      <h1>About body page</h1>
      <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700" onClick={handleClick}>Submit Button</button>
    </>
  );
}
