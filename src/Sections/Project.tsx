import Badge from "../Components/Badge";
import Image from "../Components/Image";
import { type ProjectsType } from "../Types";
import { pomodoroTimer } from "../assets/index";

const Projects: ProjectsType[] = [
  {
    id: 1,
    name: "Pomodoro Timer",
    desc: " A minimalist desktop Pomodoro application built with Electron and TypeScript. Designed to enhance focus with customizable work and rest timers, complete with native desktop notifications.",
    img: pomodoroTimer,
    tech: ["TypeScript", "TailwindCSSS","Electron", "HTML", "CSS"],
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
    <section className="flex flex-col w-full min-h-screen gap-10 justify-center">
      <h2 className="text-6xl font-bold self-center">FEATURED WORKS</h2>
      {Projects.map((item,index) => {
        return (
          <div
            key={item.id}
            className={`flex ${index%2==0? "flex-row-reverse":"flex-row"} justify-center items-center gap-15`}
          >
            <div className="size-100 w-140">
              <Image source={item.img} />
            </div>
            <div className="flex flex-col gap-10 w-1/2">
              <div className="flex flex-col gap-5">
                <h3 className="text-4xl font-semibold">{item.name.toUpperCase()}</h3>
                <p className="text-lg text-stone-300">{item.desc}</p>
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
          </div>
        );
      })}
    </section>
  );
}

export default Project;
