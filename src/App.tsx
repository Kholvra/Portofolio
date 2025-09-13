import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Project from "./Sections/Project";

function App() {
  return (
    <div className="bg-main text-white flex flex-col gap-5 justify-center items-center h-screen overflow-auto">
      <Hero/>
      <About/>
      <Project/>
    </div>
  );
}

export default App;
