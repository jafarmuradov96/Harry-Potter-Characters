import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { ReduxProvider } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harry Potter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <main className=" max-w-[320px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px]   mx-auto">
            <Header />
            <div className="mt-[50px] sm:mt-[50px] md:mt-10  lg:mt-20 ">
              {children}
            </div>
          </main>
        </ReduxProvider>
      </body>
    </html>
  );
}
