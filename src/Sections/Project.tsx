import Badge from "../Components/Badge";
import Image from "../Components/Image";
import { type ProjectsType } from "../Types";
import { pomodoroTimer } from "../assets/index";
import { motion } from "framer-motion";

const Projects: ProjectsType[] = [
  {
    id: 1,
    name: "Pomodoro Timer",
    desc: " A minimalist desktop Pomodoro application built with Electron and TypeScript. Designed to enhance focus with customizable work and rest timers, complete with native desktop notifications.",
    img: pomodoroTimer,
    tech: ["TypeScript", "TailwindCSSS", "Electron", "HTML", "CSS"],
  },
  {
    id: 2,
    name: "apalah",
    desc: "apalagi",
    tech: ["woi", "damn"],
  },
];

function Project() {
  return (
    <section className="flex flex-col w-full lg:w-3/4 lg:mx-auto min-h-screen gap-16 justify-center px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-bold self-center text-center text-[clamp(2.5rem,1rem+6vw,3.75rem)]"
      >
        FEATURED WORKS
      </motion.h2>
      {Projects.map((item, index) => {
        return (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            key={item.id}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            } justify-center items-center gap-8 lg:gap-12`}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full lg:w-1/2"
            >
              <Image source={item.img} />
            </motion.div>
            <div className="flex flex-col gap-6 w-full lg:w-1/2">
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-[clamp(1.875rem,1rem+4vw,2.25rem)]">
                  {item.name.toUpperCase()}
                </h3>
                <p className="text-base text-stone-300 md:text-lg">
                  {item.desc}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-stone-600">TECH STACK</span>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech) => {
                    return <Badge text={tech} />;
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}

export default Project;
