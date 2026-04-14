import type { Metadata } from "next";
import { Inter, Anuphan } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// cspell:ignore Anuphan
// Anuphan: Thai + English font
const anuphan = Anuphan({
  variable: "--font-anuphan",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Native App",
    template: "%s | AI Native App",
  },
  description: "AI-Native Application with Next.js 16 & Better Auth",
  keywords: ["Next.js", "AI", "Authentication", "Better Auth", "RAG"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body
        className={`${anuphan.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
