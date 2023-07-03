import Navbar from "@/app/components/Navbar";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "@/app/components/Footer";

const openSans = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "tribagus",
  description: "fullstack web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
