import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import "./globals.css";
import { Roboto } from "next/font/google";
import Providers from "@/lib/providers";
import ThemeSwitcher from "@/lib/theme-switcher";

const openSans = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "tribagus - Frontend Developer",
  description: "Frontend Developer, Backend Developer, Fullstack Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "dark" }}>
      <body className={openSans.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
