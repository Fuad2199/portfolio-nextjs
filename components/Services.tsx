import React from "react";
import { FaPencilRuler, FaUser } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: <FaPencilRuler size={40} className="text-amber-500" />,
    title: "Lorem ipsum dolor sit amet.",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, molestiae!",
  },
  {
    id: 2,
    icon: <FaUser size={40} className="text-amber-500" />,
    title: "Lorem ipsum dolor sit amet.",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, molestiae!",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl text-amber-500 font-bold">Services</h2>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            maxime deserunt itaque, molestias natus neque inventore adipisci
            consequatur, veniam omnis eligendi officia autem ab. Accusantium
            esse reprehenderit nobis quisquam doloremque?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service)=>(
            <div key={service.id}
            className="border rounded-lg p-6 flex flex-col item-start transform transition duration-500 hover:scale-105">
              <div className="mb-4">{service.icon}</div>
              <div className="text-2xl font-semibold mb-4">{service.title}</div>
              <div className="text-gray-500">{service.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
