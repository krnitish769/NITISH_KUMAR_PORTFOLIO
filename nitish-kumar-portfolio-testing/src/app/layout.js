import Navbar from "@/components/layout/Navbar";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: {
    default: "Nitish Kumar | Java Full Stack Developer",
    template: "%s | Nitish Kumar",
  },
  description:
    "Portfolio of Nitish Kumar, a Java Full Stack Developer specializing in Java, Spring Boot, REST APIs, React, and database development.",
  keywords: [
    "Nitish Kumar",
    "Java Developer",
    "Java Full Stack Developer",
    "Spring Boot Developer",
    "React Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Nitish Kumar" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}