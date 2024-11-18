"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import defaultAuthNavigation from "./_navigation/navigation";
import { useState } from "react";
import "../style.css";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigation = defaultAuthNavigation();
  const path = usePathname();
  const [input, setInput] = useState("");
  return (
    <div>
      {navigation.map((link, id) => {
        const isActive = path.startsWith(link.href);
        return (
          <Link
            className={isActive ? "font-bold text-red-500" : "text-blue-500"}
            key={id}
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
      <input
        className="text-white bg-blue-500 p-1"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
