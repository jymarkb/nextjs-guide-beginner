import { Card } from "@/components/ui/card";
import { UserAnalyticsDefaultBarChart } from "./component/userAnalyticsDefaultBarChart";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function UserAnalytics() {
  return (
    <Card className="m-5 p-2">
      <UserAnalyticsDefaultBarChart />
      <Link
        className={buttonVariants({ variant: "outline" })}
        href="dashboard/horizontal"
      >
        Go to horizontal Bar Chart
      </Link>
    </Card>
  );
}
