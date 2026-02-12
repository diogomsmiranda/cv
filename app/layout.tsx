import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Space_Grotesk } from "next/font/google";

import "./globals.css";

const headingFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"]
});

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

const themeInitScript = `
  (() => {
    const key = "cv-theme";
    const savedTheme = localStorage.getItem(key);
    const theme = savedTheme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
  })();
`;

export const metadata: Metadata = {
  title: "Diogo Miranda | CV",
  description: "Computer Science and Engineering MSc candidate CV website."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${headingFont.variable} ${bodyFont.variable}`}
      data-theme="light"
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
