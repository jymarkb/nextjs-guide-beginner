"use client";

import { clientSideFunction } from "@/utils/client-utils";
import React from "react";

export default function ClientPage() {
  console.log("client route");

  const result = clientSideFunction();
  console.log(result);
  return (
    <>
      <h1> Client Route</h1>
      <p>{result}</p>
    </>
  );
}
