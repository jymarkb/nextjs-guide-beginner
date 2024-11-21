import { Card } from "@/components/ui/card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { UserAnalyticsHorizontalChart } from "../component/userAnalyticsHorizontalChart";

export default function DefaultUserAnalytics() {
  return (
    <Card className="m-5 p-2">
      <UserAnalyticsHorizontalChart />
      <Link
        className={buttonVariants({ variant: "outline" })}
        href="/dashboard"
      >
        Go to horizontal Chart
      </Link>
    </Card>
  );
}
