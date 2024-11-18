import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "NextJs Guide",
    template: "%s | NextJs Guide",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style>
          {`
            header, footer {
              padding: 1rem;
              background-color: #cccbbb;
            }
            a{
              display:block
            }
          `}
        </style>
      </head>
      <body>
        <header>Main Header</header>
        {children}
        <footer>Main Footer</footer>
      </body>
    </html>
  );
}
