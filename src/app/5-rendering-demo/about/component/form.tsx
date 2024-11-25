"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function AboutSubmitForm() {
  const [name, setName] = useState("");
    console.log("Client About Form")
  return (
    <div>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}!</p>
    </div>
  );
}
