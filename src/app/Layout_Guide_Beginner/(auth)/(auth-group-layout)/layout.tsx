export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>
    <h2>Inner Title</h2>
    {children}
    </div>;
}
