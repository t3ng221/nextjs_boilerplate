import { Providers } from "@/providers";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextJS - Template",
  description: "A comprehensive Next.js application template with modern architecture and best practices.",
  keywords: ['nextjs', 'template', 'react', 'typescript', 'styled-components', 'prisma', 'nextauth', 'zustand', 'axios', 'eslint', 'prettier','t3ng221'],
  authors: [{ name: "t3ng221" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
