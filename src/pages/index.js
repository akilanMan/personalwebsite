import Head from "next/head";
import Script from "next/script";
import { Inter } from "next/font/google";
import HeadBar from "./components/HeadBar";
import Title from "./components/Title";
import Selfie from "./components/Selfie";
import Timeline from "./components/Timeline";
import Slideshow from "./components/Slideshow";
import GAnalytics from "./components/GAnalytics";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Akilan Manivannan</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Akilan Manivannan" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/static/thumbnail.jpg" />
      </Head>
      <Script src="https://unpkg.com/tailwindcss-jit-cdn"></Script>
      <Script src="/scripts/removeScroll.js"></Script>
      <GAnalytics />
      <HeadBar className="items-center" />
      {/* Page 1 */}
      <div className="h-screen w-100 place-content-center bg-[#E8EDDF] flex">

        {/* Title + Selfie */}
        <div className="flex place-items-center w-100">
          <Title />
          <Selfie className="sm:hidden" />
        </div>

        {/* Scroll animation */}
        <div className="fadeInStart block absolute bottom-0 w-100 text-center pb-8 ">
          <div className="field">
            <div className="scroll"></div>
          </div>
        </div>
      </div>

      {/* Page 2 */}
      <div id="career" className="grid min-h-screen content-center bg-[#242423]">
        <Timeline />
      </div>

      {/* Page 3 */}
      <div id="projects" className="flex flex-col place-content-center h-100 w-100 bg-[#CFDBD5] py-6">
      <h1 className="text-center overflow-hidden py-4 pb-10 text-4xl lg:text-7xl md:text-6xl text-[#333533] font-bold">My Projects</h1>
        <Slideshow />
        <a href=' '><h1 className="text-center py-4 font-bold text-3xl"></h1></a>
      </div>

      {/* Page 4 */}
      <div id="footer" className="relative h-screen w-100 bg-[#242423]">
        <div id="content-wrap" className="flex flex-col h-full pt-24 pb-32 w-auto place-content-center">
          <text className="text-4xl text-[#F5CB5C] self-center font-bold text-center font-mono">
            Under Construction 
          </text>
        </div>
          <Footer />
      </div>
    </>
  );
}
