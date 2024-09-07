"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import softwareDeveloper from '../../../public/assets/png/developer.png'
import { FloatingDockIcons } from "../icons/FloatingDockIcons";

export function HighlightHero() {
  return (
    <div className="h-screen flex">
        <div className="w-1/2 h-full md:px-10">
            <HeroHighlight>
            <div className="w-full flex justify-center mb-5">
                <FloatingDockIcons />
            </div>
            <motion.h1
                initial={{
                opacity: 0,
                y: 20,
                }}
                animate={{
                opacity: 1,
                y: [20, -5, 0],
                }}
                transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-[#000]  dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
               Hi, My name is <span className="text-yellow-700">Igah Franklin</span><br />
                <Highlight className="text-black dark:text-white capitalize">
                A senior software engineer
                </Highlight>
            </motion.h1>
            </HeroHighlight>
        </div>
        <div className="w-1/2 relative">
          <Image
            src={softwareDeveloper}
            alt="aceternity logo"
            fill
            className="object-cover bg-repeat inset-0 h-full w-full"
          />
        </div>
    </div>
  );
}
