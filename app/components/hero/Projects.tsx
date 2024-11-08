import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/project-timeline";


export function Projects() {
  const data = [
    {
      title: "1",
      content: (
        <div>
          <em className="text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
            ShowingXchange Mobile Apps (Android & IOS)
          </em>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-sm font-normal mb-8">
            Premier platform designed to bridge the 
            gap between house seekers and real estate agents. Whether you’re looking to buy, rent, or simply explore available properties, 
            Showingxchange provides a seamless and efficient way to connect with agents ready to show you around.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dtmsptewu/image/upload/v1731086024/Screenshot_2024-11-08_at_18.08.54_f9npaq.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dtmsptewu/image/upload/v1731086024/Screenshot_2024-11-08_at_18.07.53_iocj8s.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dtmsptewu/image/upload/v1731086564/iphone_6.7_dashboard_n7ihhy.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dtmsptewu/image/upload/v1731086565/iphone_6.7_navigation_eo0zll.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2",
      content: (
        <div>
          <em className="text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
            Health Manager Dashboard
          </em>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-sm font-normal mb-8">
            Integrated frontend components with backend APIs for displaying electronic health records (EHR), enabling seamless and secure data exchange.
          </p>
          {/* <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dtmsptewu/image/upload/v1731087260/Screenshot_2024-11-08_at_18.33.18_uickay.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dtmsptewu/image/upload/v1731087260/Screenshot_2024-11-08_at_18.29.42_vwmmym.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dtmsptewu/image/upload/v1731087260/Screenshot_2024-11-08_at_18.33.18_uickay.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dtmsptewu/image/upload/v1731087260/Screenshot_2024-11-08_at_18.29.42_vwmmym.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div> */}
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://res.cloudinary.com/dtmsptewu/image/upload/v1731087260/Screenshot_2024-11-08_at_18.33.18_uickay.png",
              "https://res.cloudinary.com/dtmsptewu/image/upload/v1731087260/Screenshot_2024-11-08_at_18.29.42_vwmmym.png",
              "https://res.cloudinary.com/dtmsptewu/image/upload/v1731087260/Screenshot_2024-11-08_at_18.33.18_uickay.png",
              "https://res.cloudinary.com/dtmsptewu/image/upload/v1731087260/Screenshot_2024-11-08_at_18.29.42_vwmmym.png",
            ].map((src, index) => (
              <div
                key={index}
                className="relative group rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              >
                <Image
                  src={src}
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <button className="px-4 py-2 bg-white text-black rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-200">
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "3",
      content: (
        <div>
          <em className="text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
            Majorgen
          </em>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-sm font-normal mb-8">
            A powerful and intuitive resume creation platform 
            designed to help you craft professional and standout resumes with ease. 
            Whether you&apos;re a recent graduate or an experienced professional, 
            Resume Link provides customizable templates, AI-driven suggestions, 
            and seamless LinkedIn integration to showcase your skills and experience. 
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dtmsptewu/image/upload/v1731085877/majorgen-dashboard_fd4gux.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dtmsptewu/image/upload/v1731085876/majorgen-dashboard-2_r22fr5.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dtmsptewu/image/upload/v1731085876/majorgen-landing_mz1scz.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dtmsptewu/image/upload/v1731085877/majorgen-dashboard_fd4gux.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
