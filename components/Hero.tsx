"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export const imageUrl = process.env.NEXT_PUBLIC_PORTFOLIO_IMAGE;

const Hero = () => {
  return (
    <div className="flex-1">
      <section
        id="home"
        className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-6"
      >
        <div className="flex-1">
          <h3 className="text-gray-400 text-xl mb-4">Hello I am</h3>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Fuad Beybutov</h1>

          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "I focus on responsive design",
              2000,
              "I build component-based architecture",
              3000,
              "I test with CI/CD pipelines",
              3000,
            ]}
            wrapper="span"
            speed={50}
            className="text-3xl md:text-5xl font-bold font-poppins mb-4 text-amber-500"
            style={{ font: "Helvetica", fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />

          <p className="text-3xl md:text-5xl font-bold font-poppins mb-4 text-amber-500">
            Front End Developer
          </p>
          <p className="text-gray-400 text-lg mb-6 max-w-md">
            I&apos;m a responsible and creative front-end developer with a fun and
            curious mindset. I&apos;m passionate about building user-friendly and
            visually engaging web experiences. Scroll down to learn more about
            my journey, skills, and projects.
          </p>
          <div>
            <Button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-6 cursor-pointer">
              Hire me
            </Button>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center w-full h-full">
          <div className="relative md:h-80 md:w-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden">
            <Image
              src={imageUrl ? imageUrl.toString() : "/placeholder.jpg"}
              alt="profile photo"
              width={450}
              height={450}
              className="object-cover select-none pointer-events-none"
              priority
              draggable={false}
            ></Image>
          </div>

          <div className="flex items-center gap-3 mt-10">
            <Button
              variant={"secondary"}
              className="cursor-pointer hover:scale-125 transition-all duration-700"
            >
              <FaLinkedin />
            </Button>
            <Button
              variant={"secondary"}
              className="cursor-pointer hover:scale-125 transition-all duration-700"
            >
              <FaWhatsapp />
            </Button>
            <Button
              variant={"secondary"}
              className="cursor-pointer hover:scale-125 transition-all duration-700"
            >
              <FaTelegram />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
