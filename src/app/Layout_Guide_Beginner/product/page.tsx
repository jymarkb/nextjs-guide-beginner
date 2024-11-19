import Link from "next/link";
import getDefaultTopNavigation from "../_navigation/navigation";
export const metadata = {
  title: "Product Landing Page Title",
  description: "This description is for product landing page ",
};

export default function ProductLandingPage() {
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
      <h1>Product Page body</h1>
    </>
  );
}
