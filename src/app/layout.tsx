import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalTransitionProvider } from "@/components/global_transition";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lovelink | Make your relationship marvelous",
  description:
    "Lovelink is a web application which can help you to make your relationship more joyful, interesting, and exciting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("relative", inter.className)}>
        <GlobalTransitionProvider>{children}</GlobalTransitionProvider>
      </body>
    </html>
  );
}
