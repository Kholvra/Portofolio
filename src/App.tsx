import Hero from "./Sections/Hero";
import About from "./Sections/About";

function App() {
  return (
    <div className="bg-main text-white flex flex-col gap-5 justify-center items-center h-screen">
      <Hero/>
      <About/>
    </div>
  );
}

export default App;
