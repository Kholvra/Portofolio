import Badge from "./Badge";
import Image from "./Image";
import Button from "./button";
import { type ProjectsType } from "../Types";
import { useContext, useEffect } from "react";
import { LenisContext } from "../lib/LenisContext";
import { motion } from "framer-motion";

type Props = {
  project: ProjectsType;
  closeModal: () => void;
};

function Modal({ project, closeModal }: Props) {
  const lenis = useContext(LenisContext);

  useEffect(() => {
    lenis?.stop();

    return () => {
      lenis?.start();
    };
  }, [lenis]);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="flex items-center fixed inset-0 z-80"
    >
      <span className="fixed inset-0 z-80 bg-black opacity-50"></span>
      <div className="flex flex-col relative gap-5 z-90 w-full lg:w-2/5 mx-auto p-10 rounded-xl bg-main">
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-2xl md:text-3xl font-bold">{project.name}</h3>
          <button
            onClick={closeModal}
            className="py-1 px-3 text-xl cursor-pointer rounded-full bg-stone-800 lg:bg-transparent lg:hover:bg-stone-800"
          >
            X
          </button>
        </div>
        <Image source={project.img} brightnessFull={true} isCrop={true} />
        <p className="text-sm lg:text-base text-stone-300">{project.desc}</p>
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-white">TECH STACK</span>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <Badge text={item} />
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-5">
          {project.livedemo ? (
            <>
              <Button text="Live Demo" link={project.livedemo} />
              <Button text="GitHub" link={project.github} />
            </>
          ) : (
            <Button text="GitHub" link={project.github} />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Modal;
