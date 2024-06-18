import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Arro Realty",
  description: "Developed by Muhit Khan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
