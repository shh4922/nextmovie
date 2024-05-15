import { Inter } from "next/font/google";
import "../styles/globals.css"
import Navigation from "../components/navigation";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata : Metadata= {
  title: {
    template: "%s | NextMovies",
    default: "next Movies.."
  },
  description: "asd ",
};


export default function RootLayout({ children }:{children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
