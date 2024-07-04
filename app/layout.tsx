import Header from "@/components/header";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nahuel Bogado | Portfolio Personal",
  description: "FullStack Developer, apasionado por el conocimiento y el desarrollo de software.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-ar" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#f6cdd6] absolute top-[24rem] right-[14rem] -z-5 h-[31rem] w-[44rem] rounded-full blur-[12rem] sm:w-[44rem] dark:bg-[#cd8486d1]/70"></div>
        <div className="bg-[#f6cdd6] absolute top-[24rem] right-[16rem] -z-5 h-[31rem] w-[50rem] rounded-full blur-[10rem] sm:w-[50rem] dark:bg-[#676394]"></div>
        <div className="bg-[#a9d7e9] absolute top-[24rem] left-[-38rem] -z-5 h-[31rem] w-[44rem] rounded-full blur-[12rem] sm:w-[48rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-10rem] 2xl:left-[8rem] dark:bg-[#cd8486d1]/90"></div>
        <div className="bg-[#a9d7e9] absolute top-[24rem] left-[-38rem] -z-5 h-[31rem] w-[50rem] rounded-full blur-[10rem] sm:w-[54rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-10rem] 2xl:left-[6rem] dark:bg-[#676394]/80"></div>


        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />


            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
