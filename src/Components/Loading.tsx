import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { LenisContext } from "../lib/LenisContext";

type Props = {
  loadingProgress: number;
};

function Loading({ loadingProgress }: Props) {
  const lenis = useContext(LenisContext);

  useEffect(() => {
    // Stop scrolling when loading screen is mounted
    lenis?.stop();

    return () => {
      // Start scrolling again when loading screen is unmounted
      lenis?.start();
    };
  }, [lenis]);

  return (
    <div className="fixed inset-0 bg-[#121212] flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          className="text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {loadingProgress}%
        </motion.div>
        <motion.div
          className="text-lg text-gray-400 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          CRAFTING THE EXPERIENCE...
        </motion.div>
      </div>
    </div>
  );
}

export default Loading;