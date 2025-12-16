import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import EmailDialog from "@/components/EmailDialog";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/badges/tj-logo.png"
          type="image/png"
          sizes="any"
        />
        <link rel="apple-touch-icon" href="/badges/tj-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${productSans.variable} antialiased font-sans dark`}>
        <div className="px-4 py-4 sm:px-8 sm:py-6 md:px-12 lg:px-20 xl:px-64 xl:py-8">
          <div className="pt-20 lg:pt-0 flex flex-col lg:flex-row gap-4 lg:gap-4 xl:gap-8">
            <Sidebar />
            <main className="flex-1 min-h-screen lg:ml-[18.5rem] xl:ml-[20rem]">
              <div className="max-w-4xl">{children}</div>
            </main>
          </div>
        </div>
        <EmailDialog />
      </body>
    </html>
  );
}
