"use client";

import React from "react";
import Image from "next/image";

export const imageUrl = process.env.NEXT_PUBLIC_PORTFOLIO_IMAGE;

const AboutMe = () => {
  const skills = [
    { name: "UX", percent: 80 },
    { name: "Website Design", percent: 90 },
    { name: "App Design", percent: 75 },
    { name: "Graphic Design", percent: 70 },
  ];
  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="relative md:h-80 md:w-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden">
          <Image
            src={imageUrl ? imageUrl.toString() : "/placeholder.jpg"}
            alt="profile photo"
            width={450}
            height={450}
            className="object-cover select-none pointer-events-none"
            priority
            draggable={false}
          />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4 text-amber-500">About Me</h2>
          <p className="mb-6 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eos
            corporis natus in a doloremque reprehenderit perspiciatis quibusdam
            non, unde ullam? Et reprehenderit reiciendis exercitationem,
            consequatur nam eaque quae ipsa.
          </p>
          <p className="mb-6 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eos
            corporis natus in a doloremque reprehenderit perspiciatis quibusdam
            non, unde ullam? Et reprehenderit reiciendis exercitationem,
            consequatur nam eaque quae ipsa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
