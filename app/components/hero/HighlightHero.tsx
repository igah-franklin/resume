"use client";
import { motion } from "framer-motion";
import { useFeatureIsOn } from "@growthbook/growthbook-react";
import Image from "next/image";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import softwareDeveloper from '../../../public/assets/png/developer.png'
import { FloatingDockIcons } from "../icons/FloatingDockIcons";
import { profileData } from "@/app/data/resume";

export function HighlightHero() {
  const enabled = useFeatureIsOn("promobanner");

  console.log(enabled, 'enabled')
  
  return (
    <div className="h-screen flex">
        <div className="w-3/4 md:w-1/2 h-full md:px-10">
            <HeroHighlight>
            <div className="w-1/2 md:w-full flex justify-center mb-5">
                {
                  enabled === false ? <FloatingDockIcons /> : <h3>not enabled</h3>
                }
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
                className="text-[20px] px-4 md:text-4xl lg:text-5xl font-bold text-[#000]  dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
               Hi, My name is <span className="text-[#B48253]">{profileData.name}</span><br />
                <Highlight className="text-black dark:text-white capitalize">
                  {profileData.professinalTitle}
                </Highlight>
               <p className="py-2 text-[15px] md:text-[20px]">
               I love building software products and helping people. <br />
                <span className="text-[#B48253]">Health and Bioinformatics Enthusiast.</span>
               </p>
            </motion.h1>
            </HeroHighlight>
        </div>
        <div className="w-1/4 md:w-1/2 relative">
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
