import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
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
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body>
        <header className="bg-gray-300">Main Header</header>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <footer className="bg-gray-300">Main Footer</footer>
      </body>
    </html>
  );
}
