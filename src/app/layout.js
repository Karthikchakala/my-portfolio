import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Karthik Chakala | Software Engineer",
    template: "%s — Karthik Chakala",
  },
  description:
    "Backend-focused Full-Stack Engineer specializing in scalable systems, real-time APIs, and modern product experiences.",
  keywords: [
    "Karthik Chakala",
    "Software Engineer",
    "Full Stack Developer",
    "Backend Engineer",
    "Portfolio",
    "React",
    "Next.js",
    "Node.js",
  ],
  authors: [{ name: "Karthik Chakala" }],
  creator: "Karthik Chakala",
  metadataBase: new URL("https://karthikchakala.dev"),
  openGraph: {
    title: "Karthik Chakala | Software Engineer",
    description:
      "Backend-focused Full-Stack Engineer specializing in scalable systems, real-time APIs, and modern product experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karthik Chakala | Software Engineer",
    description:
      "Backend-focused Full-Stack Engineer specializing in scalable systems and modern product experiences.",
  },
  other: {
    "theme-color": "#050505",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased bg-background text-foreground`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
