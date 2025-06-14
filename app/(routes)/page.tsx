import AboutMe from "@/components/AboutMe";
import Fast from "@/components/Fast";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="mt-24">
      <Hero/>
      <Fast/>
      <AboutMe/>
      <Services/>
      <Projects/>
      <Testimonials/>
    </div>
  );
}
