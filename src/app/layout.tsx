import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

import Link from "next/link";
import getDefaultTopNavigation from "./2-layout-demo/_navigation/navigation";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "NextJs Guide",
    template: "%s | NextJs Guide",
  },
};
import "./style.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = getDefaultTopNavigation();
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body>
        <header className="bg-gray-300">Main Header</header>

        <div className=" flex justify-center ">
          {links.map((link, id) => (
            <NavigationMenu key={id}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {link.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ))}
        </div>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <footer className="mt-10 bg-gray-300">Main Footer</footer>
      </body>
    </html>
  );
}
