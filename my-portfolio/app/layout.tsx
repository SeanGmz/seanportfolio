import type { Metadata } from "next";
import "@/app/globals.css";


export const metadata: Metadata = {
  title: "SGDev | Sean Patrick A. Gomez",
  description: "Personal portfolio of Sean Patrick A. Gomez",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className=" antialiased border"
      >
        {children}
      </body>
    </html>
  );
}
