import Image from "next/image";
import { FloatingDockIcons } from "./components/icons/FloatingDockIcons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FloatingDockIcons />
    </main>
  );
}
