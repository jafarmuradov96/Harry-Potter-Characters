import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harry Potter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[700px] sm:max-w-[500px] mx-auto">
          <Header />
          <div className="lg:mt-20 md:mt-10 sm:mt-[50px]">
          {children}
          </div>
        </main>
      </body>
    </html>
  );
}
