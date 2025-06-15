'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { User2 } from 'lucide-react';
import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import Autoplay from "embla-carousel-autoplay"

const testimonialData = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO',
    feedback:
      'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.',
    bgColor: 'bg-orange-100',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Marketing Manager',
    feedback:
      'Phasellus consequat urna tellus. Duis aliquam mauris est risus lectus. Nam euismod sem vel risus posuere, sit amet sollicitudin elit luctus.',
    bgColor: 'bg-blue-100',
  },
  {
    id: 3,
    name: 'David Wilson',
    position: 'Product Designer',
    feedback:
      'Cras pharetra velit metus, id venenatis nunc vulputate eu. Sed sed laoreet nunc. Pellentesque id elementum diam. Etiam luctus lobortis nibh, non posuere neque sollicitudin ac.',
    bgColor: 'bg-green-100',
  },
  {
    id: 4,
    name: 'Emily Brown',
    position: 'UX Researcher',
    feedback:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed euismod, arcu at hendrerit placerat, justo sapien dignissim metus.',
    bgColor: 'bg-purple-100',
  },
  {
    id: 5,
    name: 'Michael Johnson',
    position: 'Software Engineer',
    feedback:
      'Nullam ac sapien sit amet magna fermentum ultricies. Mauris vitae sem vitae sapien volutpat vestibulum. Sed et risus a massa vulputate vestibulum.',
    bgColor: 'bg-yellow-100',
  },
  {
    id: 6,
    name: 'Sarah Williams',
    position: 'Project Manager',
    feedback:
      'Aliquam erat volutpat. Curabitur in elit ut massa volutpat fermentum. Nulla facilisi. Integer ac orci a ante dignissim bibendum.',
    bgColor: 'bg-red-100',
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials' className="py-10">
      <div className="w-full mx-auto px-4">
        <h2 className="text-4xl text-center text-amber-500 font-bold">
          Testimonial
        </h2>
        <p className="text-gray-500 text-center mt-2 mb-8">
          Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Magnam perspiciatis eaque
          eligendi molestias libero id debitis quae
          praesentium, ratione ipsam soluta et non delectus.
          Quibusdam officia sed alias nesciunt omnis.
        </p>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {testimonialData.map(item => (
              <CarouselItem
                key={item.id}
                className="basis-1/1 lg:basis-1/3 p-4"
              >
                <div
                  className={`w-full h-full rounded-lg p-6 flex flex-col items-center gap-6 ${item.bgColor}`}
                >
                  <div className="w-24 h-24">
                    <User2 className="w-full h-full text-gray-500" />
                  </div>
                  <div className="flex-1 text-center">
                    <FaQuoteLeft className="text-amber-500 text-2xl mb-2" />
                    <p className="text-gray-500 mb-4">
                      {item.feedback}
                    </p>
                    <p className="text-gray-500 font-semibold">
                      {item.name}
                    </p>
                    <p className="text-gray-500 mb-4">
                      {item.position}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
