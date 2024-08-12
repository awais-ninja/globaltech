import { Roboto } from "next/font/google";
import "./globals.css";

import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Global Tech Web & Graphics Designer | IT Experts",
  description:
    "Global Tech delivers top-notch web and graphic design with expert IT solutions. We create stunning, high-performing digital experiences that keep your business ahead in the digital world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
