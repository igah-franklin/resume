
'use client'

import { FaArrowUp } from "react-icons/fa";
import { MacbookScrollHero } from "./components/hero/MacbookScrollHero";
import { HighlightHero } from "./components/hero/HighlightHero";
import { InfiniteMovingCards } from "./components/cards/InfiniteMovingCards";
import GrowtbookWrapper from "./components/growthbook/growtbook-wrapper";
import { BackgroundLinesDemo } from "./components/hero/BackgroundLinesDemo";
import { Projects } from "./components/hero/Projects";
import { Experience } from "./components/hero/Experience";

import ScrollToTop from "react-scroll-to-top";
import { Footer } from "./components/footer";
import Form from "./components/form/Form";


export default function Home() {
  

  return (
    <GrowtbookWrapper
      user={'hello'}
    >
      {/* <main className="h-screen relative">
          <HighlightHero />
        <div className="w-full absolute bottom-0 left-0 hidden md:block">
          <InfiniteMovingCards />
        </div>
      </main> */}
       <ScrollToTop
        smooth
        color="#6f00ff"
        style={{
          backgroundColor: "#e3e3e3",
          borderRadius: "50%",
          right: "20px", 
          bottom: "20px",
          width: "50px",
          height: "50px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
          display: "flex",
          justifyContent: 'center',
          alignItems: 'center'
        }}
        component={<FaArrowUp size="20px" color="#000" />} 
        top={300}
      />
      <div className="bg-black">
        <BackgroundLinesDemo />
        <div className="lg:w-7/12 m-auto">
          <Experience />
          <hr />
          <Projects />
          <hr />
          <Form />
           <Footer />
        </div>
      </div>
    </GrowtbookWrapper>
  );
}
