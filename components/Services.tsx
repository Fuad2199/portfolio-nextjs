import React from "react";
import { FaPencilRuler } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: <FaPencilRuler size={40} className="text-amber-500" />,
    title: "Responsive Landing Pages",
    description: "I am creating Landing pages with responsive breakpoints.",
  },
];

const Services = () => {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl text-amber-500 font-bold">Services</h2>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            maxime deserunt itaque, molestias natus neque inventore adipisci
            consequatur, veniam omnis eligendi officia autem ab. Accusantium
            esse reprehenderit nobis quisquam doloremque?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
