import { ThemeToggle } from "@/components/theme-toggle";

export default function DashboardPage() {
  return (
    <div className="container mx-auto max-w-2xl flex justify-between">
      <div>Dashboard Main Page</div>
      <ThemeToggle />
    </div>
  );
}
