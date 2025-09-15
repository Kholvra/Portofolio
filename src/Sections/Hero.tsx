import { motion } from "framer-motion";

type Props = {
  loading: boolean;
};

function Hero({ loading }: Props) {
  if (!loading) {
    return (
      <section className="flex flex-col w-full lg:gap-3 justify-center items-center min-h-screen px-6 text-center">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-bold text-[clamp(3rem,1rem+8vw,6rem)] leading-tight"
        >
          SABRI SIRAJ KHOLBI
        </motion.h1>
        <div className="flex flex-col gap-3 lg:gap-1">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-medium text-[clamp(1.5rem,1rem+2vw,1.875rem)] text-stone-300"
          >
            <span className="block lg:inline">Software Engineer </span>
            <span>Crafting Web Solutions.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="max-w-2xl mx-auto leading-relaxed text-base text-gray-500"
          >
            Built with Code & Clarity.
          </motion.p>
        </div>
        <button className="rounded-lg bg-white text-black p-3 cursor-pointer text-lg m-5 font-medium">Let's Talk</button>
      </section>
    );
  }
}

export default Hero;
