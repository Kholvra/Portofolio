import Badge from "../Components/Badge";
import Image from "../Components/Image";
import { type ProjectsType } from "../Types";

const Projects: ProjectsType[] = [
  {
    id: 1,
    name: "Pomodoro Timer",
    desc: "A cutting-edge AI-powered dashboard that revolutionizes data visualization with real-time neural network processing.",
    tech: ["react", "vue"],
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
    <section className="flex flex-col lg:w-3/4 gap-10 h-screen justify-centers">
      <h2 className="text-6xl font-bold self-center">FEATURED WORKS</h2>
      {Projects.map((item,index) => {
        return (
          <div
            key={item.id}
            className={`flex ${index%2==0? "flex-row-reverse":"flex-row"} justify-center items-center gap-15`}
          >
            <div className="size-100 w-140">
              <Image source="" />
            </div>
            <div className="flex flex-col gap-5 w-1/2">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <div className="flex flex-col">
                <span>Tech Stack</span>
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
