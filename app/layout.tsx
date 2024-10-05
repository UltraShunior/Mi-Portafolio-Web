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
        <div className="bg-[#5287FF] absolute top-[24rem] right-[14rem] -z-5 h-[31rem] w-[44rem] rounded-full blur-[18rem] max-sm:h-[20rem] max-sm:right-[4rem] max-sm:top-[12rem] sm:w-[44rem] sm:h-[20rem] dark:blur-[12rem] dark:bg-[#cd8486d1]/70"></div>
        <div className="bg-[#676394] absolute top-[24rem] right-[16rem] -z-5 h-[31rem] w-[50rem] rounded-full blur-[10rem] max-sm:h-[20rem] max-sm:right-[4rem] max-sm:top-[12rem] sm:w-[50rem] hidden dark:block"></div>

        <div className="bg-[#D929F0]/10 absolute top-[12rem] left-[8rem] -z-5 h-[31rem] w-[44rem] rounded-full blur-[12rem] max-sm:hidden sm:w-[48rem] dark:hidden"></div>
        <div className="bg-[#676394]/80 absolute top-[24rem] left-[-38rem] -z-5 h-[31rem] w-[50rem] rounded-full blur-[10rem] max-sm:hidden sm:w-[54rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-10rem] 2xl:left-[6rem] hidden dark:block"></div>


        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
