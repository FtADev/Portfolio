import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fatemeh Akhlaghi",
  description: "Welcome to my website :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased h-screen w-screen font-quicksand overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
