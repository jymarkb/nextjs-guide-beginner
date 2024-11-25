import fs from "fs";

export const ServerComponentTwo = () => {
  fs.readFileSync("src/components/interleaving-component/server-component-two.tsx", "utf-8");
  return <h1>ServerComponentTwo</h1>;
};