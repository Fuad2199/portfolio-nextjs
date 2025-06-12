import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return <div className="flex-1">
    <section id="home" className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-6">

        <div className="flex-1">
            <p>Hello I am</p>
            <h1>Fuad Beybutov</h1>
            <p>Front End Developer</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut omnis iusto sed, nulla facere ab tempora maiores vel cumque mollitia eius. Porro, sequi tenetur quae nam non iure laborum officiis.</p>
            <div>
                <Button>
                    Hire me
                </Button>
            </div>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center">
            <div className="relative w-64 h-64 md:h-80 lg:w-80"></div>
        </div>

    </section>
  </div>;
};

export default Hero;
