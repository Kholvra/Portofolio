import Modal from "../Components/Modal";
import Badge from "../Components/Badge";
import Image from "../Components/Image";
import { type ProjectsType } from "../Types";
import {
  pomodoroTimer,
  inventoryManagement,
  aquaticToDoList,
} from "../assets/index";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Projects: ProjectsType[] = [
  {
    id: 1,
    name: "Pomodoro Timer",
    desc: " A minimalist desktop Pomodoro application built with Electron and TypeScript. Designed to enhance focus with customizable work and rest timers, complete with native desktop notifications.",
    img: pomodoroTimer,
    tech: ["TypeScript", "TailwindCSSS", "Electron", "HTML", "CSS"],
    github: "https://github.com/Kholvra/pomodoro-timer-electron",
  },
  {
    id: 2,
    name: "Inventory Management (WIP)",
    desc: "A comprehensive Inventory Management System built with React and TypeScript. Designed with a user-friendly interface adapted from a Figma template, it aims to manage inventory, track sales, purchases, and other related data, featuring a dashboard, intuitive navigation, and search functionality.",
    img: inventoryManagement,
    tech: ["Vite", "React", "TypeScript", "TailwindCSS"],
    github: "https://github.com/Kholvra/inventory-managemnet-react",
  },
  {
    id: 3,
    name: "Aquatic To-Do List",
    desc: "A simple, cheerful sea-themed to-do list application built with HTML, CSS, and Vanilla JavaScript. Designed to help you manage daily tasks with features like adding, deleting, and marking tasks as complete, local storage, and a motivational octopus.",
    img: aquaticToDoList,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Kholvra/todolist-FISH",
    livedemo: "https://todolist.agandigital.com/",
  },
];

function Project() {
  const [selectedProject, setSelectedProject] = useState<ProjectsType | null>(
    null
  );

  const openModal = (item: ProjectsType) => {
    setSelectedProject(item);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

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
              className="w-full lg:w-1/2 relative group"
              onClick={() => openModal(item)}
            >
              <span className="z-30 text-9xl font-thin absolute left-0 top-0 -translate-x-1/5 text-stone-200 opacity-50">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <span className="z-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-lg font-semibold mb-2 lg:opacity-0 lg:group-hover:opacity-100 transition duration-300">
                View Project
              </span>
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
      <AnimatePresence>
        {selectedProject && (
          <Modal project={selectedProject} closeModal={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
}

export default Project;
