import AboutMe from "@/components/AboutMe";
import Fast from "@/components/Fast";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="mt-24">
      <Hero/>
      <Fast/>
      <AboutMe/>
      <Services/>
    </div>
  );
}
