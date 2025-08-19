import type { Metadata } from "next";
import "@/app/globals.css";


export const metadata: Metadata = {
  title: "SGDev | Sean Patrick A. Gomez",
  description: "Personal portfolio of Sean Patrick A. Gomez",
  icons: {
    icon: "@/app/sgdev_logo.ico",
    shortcut: "@/app/sgdev_logo.ico",
    apple: "@/app/sgdev_logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth w-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className=" antialiased border"
      >
        {children}
      </body>
    </html>
  );
}
