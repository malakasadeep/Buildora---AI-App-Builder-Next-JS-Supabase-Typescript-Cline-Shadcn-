import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";


const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Buildora - AI App Builder",
  description: "Buildora is an AI app builder that allows you to create AI-powered applications with ease. It provides a user-friendly interface and powerful tools to help you build, deploy, and manage your AI applications.",
  icons: {
    icon: "/icon-short.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        suppressHydrationWarning
      >
        <body className={`${lora.variable} ${dmSans.variable} font-sans`}>

          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main>{children}</main>
          </ThemeProvider>

        </body>
      </html>
    </ClerkProvider>
  );
}
