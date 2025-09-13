import type { TechDataType } from "@/Types";

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
    <section className="flex flex-col w-full gap-20 justify-center items-center min-h-screen">
      <h2 className="text-6xl font-bold">MY TOOLKIT</h2>
      <div className="grid grid-cols-4 size-full gap-15 ">
        {TechStack.map((item) => {
          return (
            <>
              <div className="flex flex-col gap-5">
                <h3 className="pb-2 border-b border-stone-700 text-xl font-semibold">{item.name}</h3>
                <div className="flex flex-col text-lg text-stone-300">
                  {item.data.map((item) => {
                    return <span>{item}</span>;
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}

export default Tech;
