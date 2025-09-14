import { motion } from "framer-motion";

type Props = {
  loading: boolean;
};

function Hero({ loading }: Props) {
  if (!loading) {
    return (
      <section className="flex flex-col w-full gap-5 justify-center items-center min-h-screen px-6 text-center">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-bold text-[clamp(3rem,1rem+8vw,6rem)] leading-tight"
        >
          SABRI SIRAJ KHOLBI
        </motion.h1>
        <motion.span
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-medium text-[clamp(1.5rem,1rem+2vw,1.875rem)]"
        >
          Built with Code & Clarity.
        </motion.span>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="max-w-2xl mx-auto leading-relaxed text-base text-gray-500"
        >
          I'm a software engineer who transforms complex problems into elegant
          digital solutions. Specializing in modern web technologies, I craft
          applications that balance technical excellence with exceptional user
          experiences.
        </motion.p>
      </section>
    );
  }
}

export default Hero;
