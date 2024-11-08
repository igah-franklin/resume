
'use client'

import { MacbookScrollHero } from "./components/hero/MacbookScrollHero";
import { HighlightHero } from "./components/hero/HighlightHero";
import { InfiniteMovingCards } from "./components/cards/InfiniteMovingCards";
import GrowtbookWrapper from "./components/growthbook/growtbook-wrapper";
import { BackgroundLinesDemo } from "./components/hero/BackgroundLinesDemo";
import { Projects } from "./components/hero/Projects";
import { Experience } from "./components/hero/Experience";




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
      <div>
        <BackgroundLinesDemo />
        <div className="md:w-7/12 m-auto">
          <Experience />
          <hr />
          <hr />
          <hr />
          <Projects />
        </div>
      </div>
    </GrowtbookWrapper>
  );
}
