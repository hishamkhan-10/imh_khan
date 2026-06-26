import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "imh_khan",
  description: "Hisham Khan - AI/ML Professional",
  icons: {
    icon: "/icons8-barcelona fc-color-32.png",
  },
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
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
