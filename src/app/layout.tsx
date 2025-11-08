import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Girish Lade — UX/UI Designer & Developer",
  description: "Portfolio of Girish Balaso Lade - UX/UI Designer, AI Agent Builder, and Open Source Developer passionate about creating tools people actually use.",
  keywords: ["Girish Lade", "Portfolio", "Developer", "UX/UI Designer", "GitHub", "Open Source"],
  authors: [{ name: "Girish Lade" }],
  openGraph: {
    title: "Girish Lade — Portfolio",
    description: "UX/UI Designer & Developer obsessed with building stuff people actually use… for free.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}