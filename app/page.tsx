
import { MacbookScrollHero } from "./components/hero/MacbookScrollHero";
import { HighlightHero } from "./components/hero/HighlightHero";
import { InfiniteMovingCards } from "./components/cards/InfiniteMovingCards";

export default function Home() {
  return (
    <main className="h-screen relative">
      {/* <MacbookScrollHero /> */}
        <HighlightHero />
      <div className="w-full absolute bottom-0 left-0 hidden md:block">
        <InfiniteMovingCards />
      </div>
    </main>
  );
}
