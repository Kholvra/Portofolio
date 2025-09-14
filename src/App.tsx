import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Project from "./Sections/Project";
import Tech from "./Sections/Tech";
import Contact from "./Sections/Contact";
import useSmoothScroll from "./customHooks/useSmoothScroll";
import Loading from "./Components/Loading";
import { useState, useEffect } from "react";
import { LenisContext } from "./lib/LenisContext";
import Footer from "./Components/Footer";

function App() {
  const lenis = useSmoothScroll();
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {isLoading && <Loading loadingProgress={loadingProgress} />}
      <div className="bg-main text-white w-full overflow-x-hidden">
        <Hero loading={isLoading}/>
        <About />
        <Project />
        <Tech />
        <Contact />
        <Footer />
      </div>
    </LenisContext.Provider>
  );
}

export default App;
