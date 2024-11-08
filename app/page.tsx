
'use client'

import { MacbookScrollHero } from "./components/hero/MacbookScrollHero";
import { HighlightHero } from "./components/hero/HighlightHero";
import { InfiniteMovingCards } from "./components/cards/InfiniteMovingCards";
import GrowtbookWrapper from "./components/growthbook/growtbook-wrapper";

// import { useFeatureIsOn } from "@growthbook/growthbook-react";



export default function Home() {
  // const enabled = useFeatureIsOn("promobanner");

  return (
    <GrowtbookWrapper
      user={'hello'}
    >

      <main className="h-screen relative">
        {/* <MacbookScrollHero /> */}
        {/* <div>
          <h1>{enabled ? 'On!' : 'Off'}</h1>
        </div> */}
          <HighlightHero />
        <div className="w-full absolute bottom-0 left-0 hidden md:block">
          <InfiniteMovingCards />
        </div>
      </main>
    </GrowtbookWrapper>
  );
}
