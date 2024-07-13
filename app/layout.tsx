import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from 'sonner'
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Godfrey Owino - Software Developer Portfolio",
  description: "Explore the projects and skills of Godfrey Owino, a passionate software developer specializing in web and mobile applications.",
  keywords: "Godfrey Owino, software developer, web development, mobile development, React, Next.js, TypeScript",
  authors: [{ name: "Godfrey Owino" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://goddy-the-dev.vercel.app",
    siteName: "Godfrey Owino Portfolio",
    // images: [
    //   {
    //     url: "/images/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Godfrey Owino - Software Developer",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@godfreyowino",
    creator: "@godfreyowino",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> */}
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={cn(inter.className, "min-h-full")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}