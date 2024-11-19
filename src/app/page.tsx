import Link from "next/link";
import getDefaultTopNavigation from "./Layout_Guide_Beginner/_navigation/navigation";
import "./style.css";

export default function Homepage() {
  const links = getDefaultTopNavigation();
  return (
    <div>
      {links.map((link, id) => (
        <Link key={id} href={link.href}>
          {link.name}
        </Link>
      ))}
    </div>
  );
}
