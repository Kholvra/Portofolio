import type { TechDataType } from "@/Types";
import { motion } from "framer-motion";

const TechStack: TechDataType = [
  {
    name: "LANGUAGES",
    data: ["TypeScript", "JavaScript", "Java"],
  },
  {
    name: "FRONTEND",
    data: ["React.js", "TailwindCSS"],
  },
  {
    name: "BACKEND",
    data: ["Node.js", "Express.js"],
  },
  {
    name: "TOOLS",
    data: ["Figma", "Framer Motion"],
  },
];

function Tech() {
  return (
    <section className="flex flex-col w-full lg:w-3/4 lg:mx-auto min-h-screen gap-12 lg:gap-20 justify-center px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-bold self-center text-center text-[clamp(2.5rem,1rem+6vw,3.75rem)]"
      >
        MY TOOLKIT
      </motion.h2>
      <div className="grid w-full grid-cols-2 md:grid-cols-4 gap-8 md:gap-15">
        {TechStack.map((item, categoryIndex) => {
          return (
            <div key={item.name} className="flex flex-col gap-4 lg:gap-5">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                key={item.name}
                className="pb-2 border-b border-stone-700 text-lg md:text-xl font-semibold"
              >
                {item.name}
              </motion.h3>
              <div className="flex flex-col gap-1 text-base text-stone-300">
                {item.data.map((itemData, skillIndex) => {
                  return (
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      key={itemData}
                    >
                      {itemData}
                    </motion.span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Tech;
