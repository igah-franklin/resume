import Image from "next/image";
import React from "react";
import { ExperienceTimeline } from "../ui/experience-timeline";
import BottomGlowButton from "../button/BottomGlowButton";



export function Experience() {
  const data = [
    {
      title: "Sept 2024 - Present",
      content: (
        <div>
          <em className="text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
            Full Stack Developer
          </em>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-bold mb-8">
            eHealth Africa
          </p>
          <div>
            <ul>
              <li className="list-disc">
                Integrated frontend components with backend APIs for displaying electronic health records (EHR), enabling seamless and secure data exchange.
              </li>
              <li className="list-disc">
              Created a dashboard with interactive features such as patient appointment scheduling and secure messaging while enhancing the quality of patient care.
              </li>
            </ul>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2 my-2">
              <BottomGlowButton text="Typescript" />
              <BottomGlowButton text="React Js" />
              <BottomGlowButton text="Next Js" />
              <BottomGlowButton text="Postgresql" />
              <BottomGlowButton text="Node Js" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Mar 2022 - July 2024",
      content: (
        <div>
          <em className="text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
          Senior Frontend Engineer
          </em>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-bold mb-8">
            Salistech Limited
          </p>
          <div>
            <ul>
              <li className="list-disc">
              Created a payment processing platform that aims to allow customers send and recieve payments using their social media identifiers or phone numbers.
              </li>
            </ul>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2 my-2">
              <BottomGlowButton text="Typescript" />
              <BottomGlowButton text="Next Js" />
              <BottomGlowButton text="React Js" />
              <BottomGlowButton text="Express Js" />
              <BottomGlowButton text="MongoDB" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Oct 2021-Feb 2022",
      content: (
        <div>
        <em className="text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
        Frontend Developer
        </em>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-bold mb-8">
        Huesdek
        </p>
        <div>
          <ul>
            <li className="list-disc">
            Worked with UI/UX design team to create new applications for clients
            </li>
            <li className="list-disc">
            Implemented numerous web and mobile applications from concepts through deployment
            </li>
          </ul>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2 my-2">
            <BottomGlowButton text="Javascript" />
            <BottomGlowButton text="WordPress" />
            <BottomGlowButton text="Figma" />
            <BottomGlowButton text="Adobe Photoshop" />
          </div>
        </div>
      </div>
      ),
    },
    {
      title: "Mar 2020-Aug 2021",
      content: (
        <div>
        <em className="text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
        Mobile Application Developer
        </em>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-bold mb-8">
        Upwork
        </p>
        <div>
          <ul>
            <li className="list-disc">
            Developed frontend and backend components for various web applications, ensuring optimal performance and user experience.
            </li>
          </ul>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2 my-2">
            <BottomGlowButton text="ReacNative" />
            <BottomGlowButton text="React Js" />
          </div>
        </div>
      </div>
      ),
    },
    {
      title: "Mar 2020-Aug 2021",
      content: (
        <div>
        <em className="text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
        Frontend Developer
        </em>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-bold mb-8">
        Rivetrix Toys, (Australia)
        </p>
        <div>
          <ul>
            <li className="list-disc">
            Built and maintained company&apos;s online store via a third party integration (shopify)
            </li>
            <li className="list-disc">
            Fixed bugs from existing website and implemented enhancements that sig- nificantly improved web functionality and speed.
            </li>
          </ul>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2 my-2">
            <BottomGlowButton text="Shopify" />
            <BottomGlowButton text="Liquid" />
            <BottomGlowButton text="HTML/CSS" />
          </div>
        </div>
      </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <ExperienceTimeline data={data} />
    </div>
  );
}
