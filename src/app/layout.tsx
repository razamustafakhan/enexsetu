import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { AuthProvider } from "@/store/contexts/auth.context";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SevaNex | Digital Services, Simplified",
  description:
    "SevaNex is a digital platform connecting people with essential services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navbar />

        <main>
          <Providers>
            <AuthProvider>{children}</AuthProvider>
          </Providers>
        </main>

        <Footer />
      </body>
    </html>
  );
}
