import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "@/app/globals.css";
import { satoshi } from "../fonts/font";
// import { getSession } from "next-auth/react";

// getSession

// import { auth } from "@/auth";

// import { redirect } from "next/navigation";

const geistKarla = Karla({
  variable: "--font-geist-karla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ScreenCorder",
  description: "A Screen Sharing App",
  icons: {
    icon: "/assets/icons/logo.svg",
  },
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const session = await auth();

  // if(! session) {
  //   // console.log("Session data:", session);
  //   redirect("/sign-in");
  // }
  return (
    <html lang="en">
      <body
        className={`${geistKarla.variable} ${satoshi.variable} font-karla antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
