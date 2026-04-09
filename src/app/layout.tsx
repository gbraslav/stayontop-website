import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StayOnTop — Never miss the important stuff buried in email",
  description:
    "StayOnTop helps busy families catch bills, school forms, renewals, registrations, and other important tasks hiding in email — then turns them into a simple review-and-action list.",
  metadataBase: new URL("https://stayontop.app"),
  openGraph: {
    title: "StayOnTop — Never miss the important stuff buried in email",
    description:
      "StayOnTop helps busy families catch bills, school forms, renewals, registrations, and other important tasks hiding in email.",
    url: "https://stayontop.app",
    siteName: "StayOnTop",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StayOnTop — Never miss the important stuff buried in email",
    description:
      "StayOnTop helps busy families catch bills, school forms, renewals, registrations, and other important tasks hiding in email.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QPEWJ5TB0R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QPEWJ5TB0R');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
