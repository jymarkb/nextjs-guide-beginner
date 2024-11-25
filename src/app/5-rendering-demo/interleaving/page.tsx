import { ClientComponentOne } from "@/components/interleaving-component/client-component-one";
import { ServerComponentOne } from "@/components/interleaving-component/server-component-one";

export default function InterleavingPage() {
  return (
    <>
      <h1> Interleaving Page</h1>

      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
}
