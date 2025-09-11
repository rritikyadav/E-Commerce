import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import { Inter } from "next/font/google";
import { ReduxProvider } from "@/redux/Provider.js";


const inter = Inter({
  subsets: ["latin"],
})

export const metadata = {
  title: "E-Commerce Website",
  description: "Gets Your All Favourite Products At One Place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className}  antialiased`}
      >
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
