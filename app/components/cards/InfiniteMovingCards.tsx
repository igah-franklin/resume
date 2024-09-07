"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCard } from "../ui/infinite-moving-cards";

export function InfiniteMovingCards() {
  return (
    <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCard
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
    {
      name: "Dr Ayika",
      content: "Working with Igah Franklin developer been a game-changer for our project. They delivered beyond expectations, ensuring high-quality code and seamless performance.",
      location: "Australia"
    },
    {
      name: "Pii Inc",
      content: "Franklin's expertise in web development is remarkable. Our website's speed and user experience improved dramatically thanks to their optimization skills.",
      location: "London, UK"
    },
    {
        name: "Zekkeriya Zekkeri",
        content: "This developer's attention to detail and passion for clean, scalable code made a huge difference for our startup. Our product is now faster and more responsive.",
        location: "Abuja, Nigeria"
    },
    {
      name: "Arnold Umukhe",
      content: "I was impressed by his ability to translate complex requirements into an elegant and functional application. Highly recommended!",
      location: "Florida, USA"
    },
    {
      name: "Mr Nosa",
      content: "Their professionalism and technical skills are top-notch. They consistently deliver on time and have an eye for user-friendly design.",
      location: "Ibadan, Nigeria"
    }
  ];
  