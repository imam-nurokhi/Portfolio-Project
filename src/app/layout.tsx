import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Imam Nurokhi | IT Product Architect & Full Stack Developer",
  description:
    "Portfolio of Muhammad Imam Nurokhi - IT Product Architect, React & Node.js Developer, and Odoo/ERP Specialist based in Indonesia.",
  keywords: [
    "Muhammad Imam Nurokhi",
    "Product Architect",
    "Full Stack Developer",
    "React",
    "Node.js",
    "Odoo",
    "ERP",
    "Indonesia",
  ],
  authors: [{ name: "Muhammad Imam Nurokhi" }],
  openGraph: {
    title: "Muhammad Imam Nurokhi | IT Product Architect & Full Stack Developer",
    description:
      "Bridging complex system architecture with exceptional user experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
