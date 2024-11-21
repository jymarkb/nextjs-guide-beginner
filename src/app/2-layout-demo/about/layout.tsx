import { metadata } from "./metadata";

export const generateMetadata = () => metadata;

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}