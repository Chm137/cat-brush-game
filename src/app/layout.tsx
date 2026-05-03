import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cat Brush Game",
  description: "A web game where the goal is to groom a cat — educational TypeScript pet project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
