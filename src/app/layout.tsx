"use client";
import TopNav from "@/components/nav/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import "./globals.css";
// export const metadata = {
//   title: "Nextecom",
//   description: "Ecommertce app using NextJS Full Stack",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body>
          <TopNav />
          <Toaster />
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
