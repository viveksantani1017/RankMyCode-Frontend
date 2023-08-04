import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import { Poppins } from "next/font/google";

const inter = Poppins({ subsets: ["latin"],weight:'400' });

export const metadata = {
  title: "Rank My Code | HomePage",
  description: "This is home page of Rank My Code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {children}
        <Footer/>
      </body>
    </html>
  );
}
