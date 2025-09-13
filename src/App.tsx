import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Project from "./Sections/Project";
import Tech from "./Sections/Tech";
import Contact from "./Sections/Contact";
import useSmoothScroll from "./customHooks/useSmoothScroll"


function App() {
  useSmoothScroll();
  return (
    <div className="bg-main text-white flex flex-col items-center">
      <div className="flex flex-col lg:w-3/4 items-center">
        <Hero/>
        <About/>
        <Project/>
        <Tech/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
