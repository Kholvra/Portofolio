import Lenis from "lenis";
import { useEffect } from "react";

const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    function raf(time:number){
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return ()=>{
        lenis.destroy();
    }
  });
};

export default useSmoothScroll;