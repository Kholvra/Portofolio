import Hero from "./Components/Hero";
import About from "./Components/About";
import Project from "./Components/Project";
import Tech from "./Components/Tech";
import Contact from "./Components/Contact";
import useSmoothScroll from "./customHooks/useSmoothScroll";
import Loading from "./Components/Loading";
import { useState, useEffect } from "react";
import { LenisContext } from "./lib/LenisContext";
import Footer from "./Components/Footer";

function App() {
  const lenis = useSmoothScroll();
  const [isLoading, setIsLoading] = useState(!sessionStorage.getItem("hasLoaded"));
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          sessionStorage.setItem("hasLoaded", "true");
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [isLoading]);

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
