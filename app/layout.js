import { Inter, Kanit, Kumbh_Sans } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/NavBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["ital"],
  display: "swap",
  weight: ["400", "600"],
});

const kumbhsans = Kumbh_Sans({
  variable: "--font-kumbhsans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["ital"],
  display: "swap",
  weight: ["400", "600"],
});

export const metadata = {
  title: "Liz Portfolio",
  description: "A portfolio of Elizabeth Bassey's frontend works",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${kumbhsans.className} ${kanit.className}`}>
      <body className="w-full min-h-full flex flex-col bg-cneutral-500 text-white-100">
        <NavBar />
        <div className="w-full leading-relaxed text-white-100 antialiased selection:bg-teal-300 selection:text-teal-900">
          {children}
        </div>
      </body>
    </html>
  );
}
