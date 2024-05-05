import Home from "./home/page";
import Contact from "./contact/page";
import Skills from "./skills/page";
import Works from "./works/page";
import About from "./about/page";

export default function Ghar() {
  return (
    <div className="min-h-screen bg-[#282C34] flex flex-col font-fira-code">
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}
