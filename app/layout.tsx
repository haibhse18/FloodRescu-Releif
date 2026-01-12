import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FloodRescu Relief - Emergency Flood Assistance",
  description: "Providing immediate assistance and resources for flood-affected communities. Get help, stay safe, and find relief resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
