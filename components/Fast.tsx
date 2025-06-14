'use client';

import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const techItems = [
  {
    src: 'https://res.cloudinary.com/dhzekqgvu/image/upload/v1749819216/react_vruizn.png',
    label: 'React.js',
  },
  {
    src: 'https://res.cloudinary.com/dhzekqgvu/image/upload/v1749818964/nodejs_frvs8g.png',
    label: 'Node.js',
  },
  {
    src: 'https://res.cloudinary.com/dhzekqgvu/image/upload/v1749819257/Typescript_e6sojr.png',
    label: 'TypeScript',
  },
  {
    src: 'https://res.cloudinary.com/dhzekqgvu/image/upload/v1749819547/nextjs-icon_sfukbf.png',
    label: 'Next.js',
  },
  {
    src: 'https://res.cloudinary.com/dhzekqgvu/image/upload/v1749819305/tailwind_e2kkyk.png',
    label: 'Tailwind',
  },
  {
    src: 'https://res.cloudinary.com/dhzekqgvu/image/upload/v1749819392/javascript_lw5bjx.png',
    label: 'Javascript',
  },
  {
    src: 'https://res.cloudinary.com/dhzekqgvu/image/upload/v1749822882/mongodb_nrfy9d.png',
    label: 'MongoDB',
  },
  {
    src: 'https://res.cloudinary.com/dhzekqgvu/image/upload/v1749824615/expressjs_gknu3f.png',
    label: 'Express.js',
  },
];

const Fast = () => {
  const repeatedTechItems = [...techItems, ...techItems];

  const reversedTechItems = [
    ...repeatedTechItems,
  ].reverse();
  return (
    <div className="relative w-full h-[280px] md:h-[400px] z-0 my-1 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[120%] -translate-y-1/2 rotate-10 -ml-[20%]">
        <Marquee
          speed={55}
          className="bg-black text-white dark:bg-white dark:text-black py-6 px-8 font-bold text-2xl"
        >
          {reversedTechItems.map((item, index) => (
            <div
              className="flex items-center mx-8 gap-2"
              key={item.label + index}
            >
              <Image
                src={item.src}
                alt={item.label}
                height={40}
                width={40}
                className="object-contain"
              />
              <span>{item.label}</span>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="absolute top-1/2 left-0 w-[130%] -translate-y-1/2 -rotate-[10deg] -ml-[20%]">
        <Marquee
          speed={35}
          className="bg-black text-white dark:bg-white dark:text-black py-6 px-8 font-bold text-2xl"
        >
          {repeatedTechItems.map((item, index) => (
            <div
              className="flex items-center mx-8 gap-2"
              key={item.label + index}
            >
              <Image
                src={item.src}
                alt={item.label}
                height={40}
                width={40}
                className="object-contain"
              />
              <span>{item.label}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Fast;
