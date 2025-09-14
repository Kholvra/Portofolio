import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Project from "./Sections/Project";
import Tech from "./Sections/Tech";
import Contact from "./Sections/Contact";
import useSmoothScroll from "./customHooks/useSmoothScroll"


function App() {
  useSmoothScroll();
  return (
    <div className="bg-main text-white w-full overflow-x-hidden">
      <Hero/>
      <About/>
      <Project/>
      <Tech/>
      <Contact/>
    </div>
  );
}

export default App;
