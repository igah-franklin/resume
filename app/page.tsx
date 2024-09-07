import Image from "next/image";
import { FloatingDockIcons } from "./components/icons/FloatingDockIcons";
import { MacbookScrollHero } from "./components/hero/MacbookScrollHero";
import { HighlightHero } from "./components/hero/HighlightHero";

export default function Home() {
  return (
    <main className="h-screen">
      <FloatingDockIcons />
      {/* <MacbookScrollHero /> */}
      <HighlightHero />
    </main>
  );
}
