import Link from "next/link";
import { Metadata } from "next";
import getDefaultTopNavigation from "../_navigation/navigation";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Blog",
    template: "%s | NextJs Guide",
  },
};

export default function Blog() {
  const links = getDefaultTopNavigation();
  return (
    <>
      <div>
        {links.map((link, id) => (
          <Link key={id} href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
      <h1>Blog Page body</h1>
    </>
  );
}
