"use client";

import React from "react";
import Image from "next/image";

export const imageUrl = process.env.NEXT_PUBLIC_PORTFOLIO_IMAGE;

const AboutMe = () => {
  const skills = [
    { name: "HTML5, CSS3, Javascript, Front End Fundamentals", percent: 85 },
    { name: "SASS, Tailwind CSS, Styled Components", percent: 75 },
    { name: "Flexbox, Grid, Mobile-first design, Media queries", percent: 80 },
    { name: "	ES6+, TypeScript", percent: 60 },
    { name: "	React.js, Next.js, Component based Architecture", percent: 70 },
    { name: "Redux Toolkit", percent: 60 },
    { name: "Next.js App Router, SSR/SSG/ISR", percent: 60 },
    { name: "Jest, React Testing Library", percent: 75 },
    { name: "ci-cd pipeline + GitHub Actions", percent: 50 },
    { name: "Node.js, Express.js, MongoDB", percent: 60 },
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
          <p className="mb-6 text-black">
            <strong>
              I am a Front End Developer trying to become a Full Stack
              Developer.
            </strong>
          </p>
          <p className="mb-6 text-chart-3">
            I gathered a foundation by attending the Full Stack Programming
            course at Agile Solutions LLC in 2024. I&apos;ve been working on myself
            as a programmer for about a year now. I solve programming problems
            that are essential for development as a programmer, and I am also
            able to follow trends and adapt to innovations faster than before. I
            practice algorithms in my projects. Currently, I am working on
            E-commerce on my own, where I encounter various problems, solve
            these problems, and gain various experiences. I plan all this during
            the day and spend my time efficiently.
          </p>
          <div className="space-y-6 mt-8">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="font-medium">{skill.percent}</span>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded-full">
                  <div
                    className="bg-amber-500 h-2 rounded-full"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
