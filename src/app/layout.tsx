import type { Metadata, Viewport } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";

const BASE_URL = "https://girishlade111.github.io";

export const viewport: Viewport = {
  themeColor: "#6366f1",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Girish Lade — UX/UI Designer & Developer | Open Source Portfolio",
    template: "%s | Girish Lade",
    absolute: "Girish Lade — UX/UI Designer & Developer | Open Source Portfolio",
  },
  description: "Portfolio of Girish Balaso Lade - UX/UI Designer, AI Agent Builder, and Open Source Developer. Explore projects, GitHub contributions, and connect. Building tools people actually use for free.",
  keywords: [
    "Girish Lade",
    "Girish Balaso Lade",
    "Portfolio",
    "UX Designer",
    "UI Designer",
    "Developer",
    "Open Source Developer",
    "AI Agent Builder",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "GitHub",
    "Web Developer",
    "Startup Founder",
    "Lade Stack",
  ],
  authors: [{ name: "Girish Lade", url: "https://github.com/girishlade111" }],
  creator: "Girish Lade",
  publisher: "Girish Lade",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-US": BASE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Girish Lade Portfolio",
    title: "Girish Lade — UX/UI Designer & Developer | Open Source Portfolio",
    description: "Portfolio of Girish Balaso Lade - UX/UI Designer, AI Agent Builder, and Open Source Developer. Explore projects, GitHub contributions, and connect.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Girish Lade Portfolio",
        type: "image/png",
      },
    ],
    videos: [],
  },
  twitter: {
    card: "summary_large_image",
    site: "@girishlade",
    creator: "@girishlade",
    title: "Girish Lade — UX/UI Designer & Developer",
    description: "UX/UI Designer & Developer obsessed with building stuff people actually use… for free.",
    images: ["/og-image.png"],
  },
  facebook: {
    appId: "",
  },
  appLinks: {
    ios: {},
    android: {
      package: "",
    },
    windows: {},
  },
  archives: ["https://github.com/girishlade111"],
  bookmarks: ["https://github.com/girishlade111"],
  category: "Portfolio",
  classification: "Personal Website",
  other: {
    "og:type": "website",
    "og:site_name": "Girish Lade Portfolio",
    "og:locale": "en_US",
    "geo.region": "IN",
    "geo.country": "IN",
    "DC.title": "Girish Lade — UX/UI Designer & Developer",
    "DC.creator": "Girish Lade",
    "DC.publisher": "Girish Lade",
    "DC.description": "Portfolio of Girish Balaso Lade - UX/UI Designer, AI Agent Builder, and Open Source Developer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}