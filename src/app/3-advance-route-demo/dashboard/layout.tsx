import "./../style.css";

export const metadata = {
  title: "Dashboard Page",
};

export default function DashboardLayout({
  children,
  userAnalytics,
  login
}: {
  children: React.ReactNode;
  userAnalytics: React.ReactNode;
  login:React.ReactNode;
}) {
  const isLoggedIn = false;
  return isLoggedIn ?(
    <>
      <div >{children}</div>
      <div>{userAnalytics}</div>
    </>
  ): (login);
}
