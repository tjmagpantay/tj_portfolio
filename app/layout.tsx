import type { Metadata } from "next";
import localFont from "next/font/local";
// Ignore missing type declarations for side-effect CSS import
// @ts-ignore
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import VisitorCounter from "@/components/VisitorCounter";

const productSans = localFont({
  src: [
    {
      path: "../product-sans/Product Sans Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../product-sans/Product Sans Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../product-sans/Product Sans Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../product-sans/Product Sans Bold Italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-product-sans",
});

export const metadata: Metadata = {
  title: "Tammy Jane Magpantay",
  description:
    "Portfolio of TJ Magpantay, a fullstack developer showcasing projects, experience, and technical skills.",
  icons: {
    icon: "/icons/porpol-catto.png",
    shortcut: "/icons/porpol-catto.png",
    apple: "/icons/porpol-catto.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${productSans.variable} antialiased font-sans dark`}>
        <div className="px-6 py-4 sm:px-12 sm:py-6 md:px-16 lg:px-28 xl:px-32 xl:py-8">
          <div className="pt-20 lg:pt-0 flex flex-col lg:flex-row gap-2 lg:gap-2 xl:gap-3">
            <Sidebar />
            <main className="flex-1 min-h-screen lg:ml-[180px] xl:ml-[268px]">
              <div className="mx-auto lg:mx-0 w-full max-w-4xl px-4 sm:px-6">
                {children}
              </div>
            </main>
          </div>
        </div>
        <VisitorCounter />
      </body>
    </html>
  );
}
