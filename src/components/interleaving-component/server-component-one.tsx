import fs from "fs";
// import { ClientComponentOne } from "./client-component-one";
// import { ServerComponentTwo } from "./server-component-two";

export const ServerComponentOne = () => {
  fs.readFileSync(
    "src/components/interleaving-component/server-component-one.tsx",
    "utf-8"
  );
  return (
    <>
      <h1>ServerComponentOne</h1>
      {/* <ServerComponentTwo /> */}
      {/* <ClientComponentOne /> */}
    </>
  );
};
